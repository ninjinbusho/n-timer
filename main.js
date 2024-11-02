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
let inputn = document.getElementById("num1");
let inputm = document.getElementById("num2");
let inputl = document.getElementById("num3");

document.getElementById('a').textContent = tm;
for(i=0; i<3; i++){
    document.getElementById(displayarry[i]).textContent = tmary[i]; 
}

const numberValue1 = document.forms.numberform1.num1;
numberValue1.addEventListener("input", ()=>{
    let inputValueBox1 = document.getElementById('nshinhou1');
    inputValueBox1.textContent = numberValue1.value + "進法";
})
const numberValue2 = document.forms.numberform2.num2;
numberValue2.addEventListener("input", ()=>{
    let inputValueBox2 = document.getElementById('nshinhou2');
    inputValueBox2.textContent = numberValue2.value + "進法";
})
const numberValue3 = document.forms.numberform3.num3;
numberValue3.addEventListener("input", ()=>{
    let inputValueBox3 = document.getElementById('nshinhou3');
    inputValueBox3.textContent = numberValue3.value + "進法";
})

function stop(){
    console.log("stopボタンが押されました");
    clearInterval(interval);
    interval = null;
    lock = 2;
}

function reset(){
    console.log("resetボタンが押されました");
    if(lock === 2){
        inputn.disabled = false;
        inputm.disabled = false;
        inputl.disabled = false;
        lock = 0;
        time = 0;
        timen = 0;
        timem = 0;
        timel = 0;
        timeary = [timen, timem, timel];
        count = 0;
        tm = "000";
        tmn = "000";
        tmm = "000";
        tml = "000";
        tmary = [tmn, tmm, tml];
        document.getElementById('a').textContent = tm;
        for(i=0; i<3; i++){
            document.getElementById(displayarry[i]).textContent = tmary[i]; 
        }
    }
    
    
}

function calcNtime(x, y){
    return ary[(((x%(y**3))-(x%(y**3))%(y**2))/(y**2))] + ary[(((x%(y**3))%(y**2)-((x%(y**3))%(y**2))%y)/y)] + ary[((x%(y**3))%(y**2))%y];
}

function start(){
    inputn = document.getElementById("num1");
    inputm = document.getElementById("num2");
    inputl = document.getElementById("num3");
    if(lock != 1){
        lock = 1;
        let n = inputn.value;
        let m = inputm.value;
        let l = inputl.value;
        let numary = [n, m, l];
        console.log(n, m, l);
        inputn.disabled = true;
        inputm.disabled = true;
        inputl.disabled = true;
        interval=setInterval(function(){
            
            time++;
            for(i=0; i<3; i++){
                timeary[i] = calcNtime(time, numary[i]);
                document.getElementById(displayarry[i]).textContent = timeary[i]; 
            }
            count++;
            //三桁にする
            time = time%1000;
            if (time < 10){
                tm = "00"+time;
            } else if (time < 100){
                tm = "0"+time;
            } else {
                tm = time;
            } 
            document.getElementById('a').textContent = tm;
            console.log("10進法:%d %d進法:%s %d進法:%s %d進法:%s", time, n, timeary[0], m, timeary[1], l, timeary[2]);

            if (count === 10000) {
                clearInterval(interval);
                interval = null;
                lock = 0;
            }
        }, 1000);
    }
};



let startButton = document.getElementById('strt');
startButton.addEventListener('click', start);
let stopButton = document.getElementById('stp');
stopButton.addEventListener('click', stop);
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset);
let display10shinhou = document.getElementById('checkbox');
display10shinhou.addEventListener('change', function(){
    var ele = document.getElementById('shinhou10');
    if(document.getElementById('checkbox').checked) {
        ele.style.display = 'inline-block';
    }else {
        ele.style.display = 'none';
    }
});