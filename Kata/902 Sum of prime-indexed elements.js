// Sum of prime-indexed elements

/*
In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

The first element of the array is at index 0.

Good luck!
*/

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

function total(arr) {
  return arr.filter((el, i) => isPrime(i)).reduce((prev, cur) => prev + cur, 0);
}

console.log(total([])); // 0
console.log(total([1, 2, 3, 4])); // 7
console.log(total([1, 2, 3, 4, 5, 6])); // 13
console.log(total([1, 2, 3, 4, 5, 6, 7, 8])); // 21
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); // 21
