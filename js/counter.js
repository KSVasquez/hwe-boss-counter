let minusBtn = document.querySelector("#minus-btn");
let count = document.querySelector("#count");
let plusBtn = document.querySelector("#plus-btn");
let custom = document.querySelector("#custom");
let bar = document.querySelector(".bar");
let over = document.querySelector(".over");
let fs = document.querySelector("#fsbutton");

let startNum = 150;
let countNum = 150;
let customNum = 1;
count.innerHTML = countNum;

custom.addEventListener("change", (e) => {
    customNum = Number(e.target.value);
});
custom.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        custom.blur();
    }
});

minusBtn.addEventListener("click", () => {
    countNum -= customNum;
    countNum = Math.max(countNum, 0);
    count.innerHTML = countNum;
    custom.value = "1";
    customNum = 1;
    updateBar();
});
plusBtn.addEventListener("click", () => {
    countNum += customNum;
    count.innerHTML = countNum;
    custom.value = "1";
    customNum = 1;
    updateBar();
});

fs.addEventListener("click", () => {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
});
document.documentElement.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement) {
        fs.innerHTML = '<i class="fa-solid fa-compress"></i>';
    } else {
        fs.innerHTML = '<i class="fa-solid fa-expand"></i>';
    }
});

updateBar();

function updateBar() {
    let percent = countNum / startNum * 100;
    let overPer = Math.min(Math.max(percent - 100, 0), 100);
    let newPer = Math.min(Math.max(percent, 0), 100);

    bar.style.width = newPer + "%"
    over.style.width = overPer + "%"
}