import Notiflix from 'notiflix';

const formElement = document.querySelector('.form');
let inputFirstDelay = document.querySelector('[name=delay]');
let inputDelayStep = document.querySelector('[name=step]');
let inputAmount = document.querySelector('[name=amount]');

formElement.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  inputFirstDelay = Number(event.target.delay.value);
  inputDelayStep = Number(event.target.step.value);
  inputAmount = Number(event.target.amount.value);

  for (let index = 1; index <= inputAmount; index++) {
    createPromise(index, inputFirstDelay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }, inputFirstDelay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
        }, inputFirstDelay);
      }
    ), inputFirstDelay += inputDelayStep;
    formElement.reset();
  }
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, inputFirstDelay);
  });
  }




// const refs = {
//   form: document.querySelector('.form')
// }

// refs.form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: {
//       delay,
//       step,
//       amount,
//     }
//   } = event.target;

//   let inputFirstDelay = Number(delay.value);

//   for (let index = 1; index <= amount.value; index += 1) {
//     createPromise(index, inputFirstDelay).then(onPromiseSuccess).catch(onPromiseError)
//     inputFirstDelay += Number(step.value);
//   }
//   event.target.reset();
// }

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({position, delay})
//       } else {
//         reject({position, delay})
//       }
//     }, delay)
//   })
// }

// function onPromiseSuccess({ position, delay }) {
//   Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
// }

// function onPromiseError({ position, delay }) {
//   Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
// }