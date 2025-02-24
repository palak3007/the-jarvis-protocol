let loader = document.querySelector(".loader")
setInterval(function(){
        loader.style.top = "-100%"
},4800)

let clickCount = 0;
let timeLeft = 10;
let timer;

const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');
const timeLeftDisplay = document.getElementById('timeLeft');
const startButton = document.getElementById('startButton');

clickButton.addEventListener('click', () => {
    if (timeLeft > 0) {
        clickCount++;
        clickCountDisplay.textContent = clickCount;
    }
});

startButton.addEventListener('click', startGame);

function startGame() {
    clickCount = 0;
    timeLeft = 10;
    clickCountDisplay.textContent = clickCount;
    timeLeftDisplay.textContent = timeLeft;
    timer = setInterval(countDown, 1000);
}

function countDown() {
    if (timeLeft > 0) {
        timeLeft--;
        timeLeftDisplay.textContent = timeLeft;
    } else {
        clearInterval(timer);
        alert(`Awwwwwwww.... bas itna hi! i scored much higher than you but anyway, You clicked ${clickCount} times.`);
    }
}

const clickText = document.getElementById("clickCount");

function animateClick() {
    clickText.style.transform = "scale(1.2)";
    setTimeout(() => clickText.style.transform = "scale(1)", 100);
}
document.getElementById("clickButton").addEventListener("click", animateClick);

