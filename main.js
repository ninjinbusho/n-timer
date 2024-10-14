let time = 0;
let timen = 0;
let count = 0;
let tm = "000";
let tmn = "000";
let lock = 0;
let n = document.getElementById("num1");
n = n.value;
document.getElementById('a').textContent = tm;
document.getElementById('b').textContent = tmn;
document.getElementById('nshinhou').textContent = n + "進法";

n-shinhou.addEventListener('input', function(){
    n = document.getElementById("num1").value;
    document.getElementById('nshinhou').textContent = n + "進法";
})

function buttonClick(){
    let n = document.getElementById("num1");
    n = n.value;
    console.log(n);
    if(lock === 0){
        console.log("10進法:%d %d進法:%d", time, n, timen);
        const interval=setInterval(function(){
            lock = 1;
            time++;
            timen = ((time-time%(n**3))/(n**3))*1000 + (((time%(n**3))-(time%(n**3))%(n**2))/(n**2))*100 + (((time%(n**3))%(n**2)-((time%(n**3))%(n**2))%n)/n)*10 + ((time%(n**3))%(n**2))%n;
            count++;
            time = time%1000;
            timen = timen%1000;
            console.log("10進法:%d %d進法:%d", time, n, timen);
            if (time < 10){
                tm = "00"+time;
            } else if (time < 100){
                tm = "0"+time;
            } else {
                tm = time;
            } 
            if (timen < 10){
                tmn = "00"+timen;
            } else if (timen < 100){
                tmn = "0"+timen;
            } else {
                tmn = timen;
            }
            document.getElementById('a').textContent = tm;
            document.getElementById('b').textContent = tmn; 
            
            if (count === 10000) {
                clearInterval(interval);
            }
        
        }, 1000);
    }
}

let button = document.getElementById('strt');
button.addEventListener('click', buttonClick);