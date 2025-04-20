let min = 25;
let sec = 0;
let timer;
let isRunning = false;

let minDisplay = document.getElementById("min");
let secDisplay = document.getElementById("sec");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let short = document.getElementById("short");
let long = document.getElementById("long");

function updateDisplay() {
minDisplay.textContent = String(min).padStart(2, '0');
secDisplay.textContent = String(sec).padStart(2, '0');
}

start.onclick = function () {
if (!isRunning) {
isRunning = true;
timer = setInterval(() => {
if (sec === 0) {
if (min === 0) {
    clearInterval(timer);
    isRunning = false;
} else {
    min--;
    sec = 59;
}
} else {
sec--;
}
updateDisplay();
}, 1000);
}
};

stop.onclick = function () {
clearInterval(timer);
isRunning = false;
};

reset.onclick = function () {
stop.onclick();
min = 25;
sec = 0;
updateDisplay();
};

short.onclick = function () {
stop.onclick();
min = 5;
sec = 0;
updateDisplay();
};

long.onclick = function () {
stop.onclick();
min = 15;
sec = 0;
updateDisplay();
};

updateDisplay();
