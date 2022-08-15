// Simple multiplication

/*
This kata is about multiplying a given number by eight if it is an even number 
and by nine otherwise.
*/

function simpleMultiplication(number) {
  return number % 2 == 0 ? number * 8 : number * 9; 
}

console.log(simpleMultiplication(5)) // 45
console.log(simpleMultiplication(8)) // 64


function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}
