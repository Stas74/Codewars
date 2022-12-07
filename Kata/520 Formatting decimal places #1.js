// Formatting decimal places #1

/*
Each floating-point number should be formatted that only the first two decimal places are returned. 
You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Don't round the numbers! Just cut them after two decimal places!

Right examples:  
32.8493 is 32.84  
14.3286 is 14.32

Incorrect examples (e.g. if you round the numbers):  
32.8493 is 32.85  
14.3286 is 14.33
*/

function twoDecimalPlaces(number) {
  const dotPos = String(number).indexOf(".");
  return +String(number).slice(0, dotPos + 3);
}

console.log(twoDecimalPlaces(10.1289767789)); //  10.12
console.log(twoDecimalPlaces(-7488.83485834983)); //  -7488.83



const twoDecimalPlaces = number => Math.trunc(number*100) / 100;


function twoDecimalPlaces(number) {
  return +number.toFixed(4).slice(0, -2);
}


function twoDecimalPlaces(number) {
  return parseInt(number * 100) / 100
}
