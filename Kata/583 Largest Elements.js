// Largest Elements

/*
Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]
*/

function largest(n, xs) {
  return n == 0 ? [] : xs.sort((a, b) => a - b).slice(-n);
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // [9, 10]
console.log(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5])); // [5, 5, 5]
console.log(largest(0,[1,2,3,4,8,7,6,5])); // []
