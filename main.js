let time = 0;
let timen = 0;
let count = 0;
let tm = 0;
let tmn = 0;
let lock = 0;
let n = 3;
function buttonClick(){
    if(lock === 0){

        const interval=setInterval(function(){
            lock = 1;
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
            time++;
            timen = ((time-time%(n**3))/(n**3))*1000 + (((time%(n**3))-(time%(n**3))%(n**2))/(n**2))*100 + (((time%(n**3))%(n**2)-((time%(n**3))%(n**2))%n)/n)*10 + ((time%(n**3))%(n**2))%n;
            count++;
            time = time%1000;
            timen = timen%1000;
            if (count === 10000) {
                clearInterval(interval);
            }
        
        }, 1000);
    }
}

let button = document.getElementById('strt');
button.addEventListener('click', buttonClick);