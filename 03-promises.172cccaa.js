function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");const u=document.querySelector(".form");let l=document.querySelector("[name=delay]"),a=document.querySelector("[name=step]"),d=document.querySelector("[name=amount]");function s(e,t){const o=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),l)}))}u.addEventListener("submit",(function(t){t.preventDefault(),l=Number(t.target.delay.value),a=Number(t.target.step.value),d=Number(t.target.amount.value);for(let t=1;t<=d;t++)s(t,l).then((({position:t,delay:o})=>{setTimeout((()=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)}),l)})).catch((({position:t,delay:o})=>{setTimeout((()=>{e(i).Notify.warning(`❌ Rejected promise ${t} in ${o}ms`)}),l)})),l+=a,u.reset()}));
//# sourceMappingURL=03-promises.172cccaa.js.map