const btn = document.querySelector('button');
console.log(btn)
const input = document.querySelectorAll('input');
console.log(input)
const inputFirstDelay = input[0];
console.log(inputFirstDelay);
const inputDelayStep = input[1];
console.log(inputDelayStep);
const inputAmount = input[2];
console.log(inputAmount);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
