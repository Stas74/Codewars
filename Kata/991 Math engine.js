// Math engine

/*
Given an array of integers.

Return a number that is the sum of

The product of all the non-negative numbers
The sum of all the negative numbers

Edge cases

If there are no non-negative numbers, assume the product of them to be 1.
Similarly, if there are no negative numbers, assume the sum of them to be 0.
If the array is null, result should be 0.

For example:
mathEngine([1, 2, 3, -4, -5]) // should return -3
*/

function mathEngine(arr) {
  return arr === null
    ? 0
    : arr.reduce((prev, cur) => prev * (cur >= 0 ? cur : 1), 1) +
        arr.reduce((prev, cur) => prev + (cur < 0 ? cur : 0), 0);
}

console.log(mathEngine([1, 2, 3, -4, -5])); // -3
console.log(mathEngine([2])); // 2
console.log(mathEngine([-5])); // -4
console.log(mathEngine([0, -5])); // -5
