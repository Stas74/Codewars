// Get decimal part of the given number

/*

Write a function that returns only the decimal part of the given number.

You only have to handle valid numbers, not Infinity, NaN, or similar. 
Always return a positive decimal part.

Examples
getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2

*/

function getDecimal(n){
  return n ? Math.abs(n) - Math.floor(Math.abs(n)) : 0
}

console.log(getDecimal(10)); // 0
console.log(getDecimal(-1.2)); // 0.2
console.log(getDecimal(4.5)); // 0.5
console.log(getDecimal(NaN)); // 0



function getDecimal(n){
  return Math.abs(n % 1);
}


const getDecimal = ($) => Math.abs( ( $ % 1).toFixed(10) )



function getDecimal(n){
  return Math.abs(n - ~~n);
}


const getDecimal = n => Math.abs(n) % 1;
