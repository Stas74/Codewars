// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (input == null || input.length < 1) {
    return [];
  }
  let finArr = [0, 0];
  for (let elem of input) {
    elem > 0 ? (finArr[0] += 1) : (finArr[1] += elem);
  }
  return finArr;
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
); //  [10, -65]

console.log(countPositivesSumNegatives([])); //  []
