// Is It Negative Zero (-0)?

/*
There exist two zeroes: +0 (or just 0) and -0.

Write a function that returns true if the input number is -0 and false otherwise (True and False for Python).

In JavaScript / TypeScript / Coffeescript the input will be a number.

In Python / Java / C / NASM / Haskell / the input will be a float.
*/

function isNegativeZero(n) {
  return Object.is(n, -0)
}

console.log(isNegativeZero(-0)); // true
console.log(isNegativeZero(-Infinity)); // false
console.log(isNegativeZero(0)); // false



const isNegativeZero = n =>
  1 / Math.sign(n) === -Infinity;


const isNegativeZero = n => Object.is(n, -0);



function isNegativeZero(n) {
  return Math.atan2(n, n) === -Math.PI;
}



function isNegativeZero(n) {
  return ! n && 1/n < 0 ;
}



function isNegativeZero(n) {
  return util.inspect(n) === '-0'
}



// check negative zero func
const isNegativeZero = n =>
  n === 0 ? (1 / n) < 0 : false
