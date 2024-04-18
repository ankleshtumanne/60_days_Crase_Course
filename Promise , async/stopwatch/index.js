let second=0;
let minutes=0;
let hour=0;

let displaytime = document.getElementById('display');
let timer = null;

function stopWatch() {
    second++;
    if (second == 60) {
        second = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hour++;
        }
    }
  // yeh 0:0:0 ke form me tha 
// 00:00:00 me lane ke liye line no 31,32,33 or siplay krne ke l;iye 34 me likha hu likha hu 
    let h = hour < 10 ? "0" + hour : hour;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = second < 10 ? "0" + second : second;
    displaytime.innerHTML = h + ":" + m + ":" + s;
}

function startWatch() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}


function watchStop() {
    clearInterval(timer);
}

function resetWatch() {
    clearInterval(timer);
    [second, hour, minutes] = [0, 0, 0];
    displaytime.innerHTML = "00:00:00";
}