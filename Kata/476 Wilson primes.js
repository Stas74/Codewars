// Wilson primes

/*
Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)
should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
*/

// function factorialize(num) {
//   if (num < 0)
//         return -1;
//   else if (num == 0)
//       return 1;
//   else {
//       return (num * factorialize(num - 1));
//   }
// }

// function amIWilson(p) {
//   return Number.isInteger((factorialize(p - 1) + 1) / (p * p))
// }

function amIWilson(p) {
  return [5, 13, 563].indexOf(p) != -1;
}

console.log(amIWilson(5)); // true
console.log(amIWilson(6)); // false
console.log(amIWilson(9)); // false
