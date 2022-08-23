// Summing a number's digits

/*
Write a function named sumDigits which takes a number as input and 
returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

function sumDigits(number) {
  return eval(Math.abs(number).toString().split('').join('+'))
}

console.log(sumDigits(10)) // 1
console.log(sumDigits(99)) // 18
console.log(sumDigits(-32)) // 5




function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
}


const sumDigits = n => [...Math.abs(n)+''].reduce((s,v)=>s+(+v),0)
