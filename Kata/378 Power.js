// Power

/*
The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power 
(ie multiplies number by itself power times).

Examples
numberToPower(3,2)  // -> 9 ( = 3 * 3 )
numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10,6) // -> 1000000
Note: Math.pow and some other Math functions like eval() and ** are disabled.
*/

function numberToPower(number, power){
  let total = 1
  for (let index = power; power > 0; power--) {
    total *= number    
  }
  return total
}

console.log(numberToPower(4, 2)); // 16
console.log(numberToPower(10, 4)); // 10000




const numberToPower = (number,power) => power > 0 ? number * numberToPower(number,power-1) : 1;


function numberToPower(number, power){
  return Array(power).fill(number).reduce((res, n) => res * n, 1);
}

