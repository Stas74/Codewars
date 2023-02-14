// Is every value in the array an array?

/*
Is every value in the array an array?

This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

Examples:

[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false
*/

const arrCheck = (value) => value.every(Array.isArray);


console.log(arrCheck([])); // true
console.log(arrCheck([["string"]])); // true
console.log(arrCheck([[], {}])); // false
console.log(arrCheck([[1], [2], [3]])); // true
