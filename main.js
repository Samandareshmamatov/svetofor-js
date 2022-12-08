const redCircle = document.getElementById("redCircle");
const yellowCircle = document.getElementById("yellowCircle")
const greenCircle = document.getElementById("greenCircle")

let count = 1;
setInterval(() => {
    if (count % 7 == 1 || count % 7 == 2 || count % 7 == 3) {
        redCircle.style.backgroundColor = "red"
        greenCircle.style.backgroundColor = "#585858"
        yellowCircle.style.backgroundColor = "#585858"
    } else if (count % 7 == 4) {
        redCircle.style.backgroundColor = "#585858"
        greenCircle.style.backgroundColor = "#585858"
        yellowCircle.style.backgroundColor = "yellow"
    } else if (count % 7 == 5 || count % 7 == 6 || count % 7 == 0) {
        redCircle.style.backgroundColor = "#585858"
        greenCircle.style.backgroundColor = "#00ff00"
        yellowCircle.style.backgroundColor = "#585858"
    }
    count++;
}, 1000)