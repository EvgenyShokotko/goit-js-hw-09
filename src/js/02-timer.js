// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
// all modules
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const btn = document.querySelector('button[data-start]');
const spanDays = document.querySelector('span[data-days]');
const spanHours = document.querySelector('span[data-hours]');
const spanMinutes = document.querySelector('span[data-minutes]');
const spanSeconds = document.querySelector('span[data-seconds]');

const decorSpan = document.querySelectorAll('.value');
const decorTimer = document.querySelector('.timer');
const decorDiv = document.querySelectorAll('.field');

decorDiv.forEach((div) => {
  div.style.display = 'flex';
  div.style.flexDirection = 'column';
  div.style.justifyContent = 'center';
  div.style.alignItems = 'center';
  div.style.paddingLeft = '5px';
  // div.style.paddingLeft.firstChild = '0px';
})

decorSpan.forEach ((span) => { 
  span.style.fontSize = '25px';
    });
decorTimer.style.display = 'flex';

btn.disabled = true;
let selectedtime = null;
let ms = null;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      selectedtime = selectedDates[0];
    if (new Date() > selectedDates[0]) {
        btn.disabled = true;
          Notiflix.Notify.warning('Please choose a date in the future');
      }
    if (new Date() < selectedDates[0]) {
        Notiflix.Notify.success('Press start');
          btn.disabled = false;
          ms = selectedDates[0] - new Date();
          return convertMs(ms)
      }
  },
};
flatpickr(input, options)


btn.addEventListener('click', onBtnStart);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
 
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  console.log(`${days}:${hours}:${minutes}:${seconds}`);
  
  spanDays.textContent = days;
  spanHours.textContent = hours;
  spanMinutes.textContent = minutes;
  spanSeconds.textContent = seconds;

  if (days == 00 && hours == 00 && minutes == 00 && seconds == 00) {
    Notiflix.Notify.success('Congratulations we did it. Choose another date and try again....');
    clearInterval(timerId);
    btn.disabled = false
  }
    return { days, hours, minutes, seconds };   
}

function onBtnStart() {
    btn.disabled = true;
    Notiflix.Notify.success('Well done, lets start....');
    timerId = setInterval(() => {
            const deltaTime = selectedtime - Date.now();
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            
    }, 1000);

    }

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
