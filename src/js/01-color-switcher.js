const btnStart = document.querySelector('button[data-start]');
const btnEnd = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

btnStart.addEventListener('click', startChangeColor);
btnEnd.addEventListener('click', stopChangeColor);
let timerId = null;

function startChangeColor() {
  btnStart.disabled = true;
timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function stopChangeColor() {
  btnStart.disabled = false;
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

