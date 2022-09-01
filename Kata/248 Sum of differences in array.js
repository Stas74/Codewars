// Sum of differences in array

/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0
*/

// checkExam = (x, y) => (x = y.reduce((s, e, i) => s + (e === x[i] ? 4 : e === '' ? 0 : -1), 0)) > 0 ? x : 0;

function sumOfDifferences(arr) { 
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
// return arr.sort((a, b) =>  b - a).reduce((prev, cur, i) => prev + (cur[i] - cur[i + 1]), 0) ???

console.log(sumOfDifferences([1, 2, 10])); // 9
console.log(sumOfDifferences([-3, -2, -1])); // 2
