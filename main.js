let time = 0;
let timen = 0;
let count = 0;
let tm = 0;
let tmn = 0;
function buttonClick(){
    const interval=setInterval(function(){
        console.log("10進法:%d 3進法:%d", time, timen);
        
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
        timen = ((time-time%(3**3))/(3**3))*1000 + (((time%(3**3))-(time%(3**3))%(3**2))/(3**2))*100 + (((time%(3**3))%(3**2)-((time%(3**3))%(3**2))%3)/3)*10 + ((time%(3**3))%(3**2))%3;
        count++;
        time = time%1000;
        timen = timen%1000;
        if (count === 10000) {
            clearInterval(interval);
          }
    }, 1000);
}
let button = document.getElementById('strt');
button.addEventListener('click', buttonClick);