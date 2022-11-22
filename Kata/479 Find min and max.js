// Find min and max

/*
Implement a function that returns the minimal and the maximal value of a list (in this order).
*/

function getMinMax(arr) {
  let sortedArr = arr.sort((a,b) => a - b)
  return [sortedArr[0], sortedArr[arr.length - 1]]
}

console.log(getMinMax([1])); // [1, 1]
console.log(getMinMax([1, 2])); // [1, 2]
console.log(getMinMax([2, 1])); // [1, 2]
