// Lowest product of 4 consecutive numbers

/*
Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

This should only work if the number has 4 digits or more. If not, return "Number is too small".

Example
lowestProduct("123456789") --> 24 (1x2x3x4)
lowestProduct("35") --> "Number is too small"
*/

function lowestProduct(input) {
  if (input.length < 4) {
    return "Number is too small";
  }
  let finNum = input.slice(0, 4).split("").reduce((prev, cur) => prev * (+cur), 1);
  for (let i = 1; i + 3 < input.length; i++) {
    let product = input.slice(i, i + 4).split("").reduce((prev, cur) => prev * (+cur), 1);
    if (product < finNum) {
      finNum = product;
    }
  }
  return finNum;
}

console.log(lowestProduct("123456789")); // 24
console.log(lowestProduct("234567899")); // 120
console.log(lowestProduct("2345611117899")); // 1
console.log(lowestProduct("333")); // "Number is too small"
console.log(lowestProduct("1234111")); // 4  "Numbers should be consecutives"
