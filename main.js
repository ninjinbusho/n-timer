let time = 0;
let timen = 0;
let timem = 0;
let timel = 0;
let timeary = [timen, timem, timel];
let count = 0;
let tm = "000";
let tmn = "000";
let tmm = "000";
let tml = "000";
let tmary = [tmn, tmm, tml];
let displayarry = ['b', 'c', 'd'];
let lock = 0;
const ary = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let interval = null;

document.getElementById('a').textContent = tm;
for(i=0; i<3; i++){
    document.getElementById(displayarry[i]).textContent = tmary[i]; 
}
const numberValue1 = document.forms.numberform1.num1;

numberValue1.addEventListener("input", ()=>{
    let inputValueBox = document.getElementById('nshinhou1');
    inputValueBox.textContent = numberValue1.value + "進法";
})






function stop(){
    console.log("stopボタンが押されました");
    clearInterval(interval);
    interval = null;
    lock = 0;
}

function calcNtime(x, y){
    return ((x-x%(y**3))/(y**3))*1000 + (((x%(y**3))-(x%(y**3))%(y**2))/(y**2))*100 + (((x%(y**3))%(y**2)-((x%(y**3))%(y**2))%y)/y)*10 + ((x%(y**3))%(y**2))%y;
}

function start(){
    let n = document.getElementById("num1");
    n = n.value;
    let m = document.getElementById("num2");
    m = m.value;
    let l = document.getElementById("num3");
    l = l.value;
    let numary = [n, m, l];
    console.log(n, m, l);
    if(lock === 0){
        
        interval=setInterval(function(){
            lock = 1;
            time++;
            for(i=0; i<3; i++){
                timeary[i] = calcNtime(time, numary[i]);
                timeary[i] = timeary[i]%1000;
                if (timeary[i] < 10){
                    tmary[i] = "00"+timeary[i];
                } else if (timeary[i] < 100){
                    tmary[i] = "0"+timeary[i];
                } else {
                    tmary[i] = timeary[i];
                }
                document.getElementById(displayarry[i]).textContent = tmary[i]; 
            }
            count++;
            time = time%1000;
            if (time < 10){
                tm = "00"+time;
            } else if (time < 100){
                tm = "0"+time;
            } else {
                tm = time;
            } 
            document.getElementById('a').textContent = tm;
            console.log("10進法:%d %d進法:%d %d進法:%d %d進法:%d", time, n, timeary[0], m, timeary[1], l, timeary[2]);

            if (count === 10000) {
                clearInterval(interval);
                interval = null;
                lock = 0;
            }
        }, 1000);
    }
}

let startButton = document.getElementById('strt');
startButton.addEventListener('click', start);
let stopButton = document.getElementById('stp');
stopButton.addEventListener('click', stop);
