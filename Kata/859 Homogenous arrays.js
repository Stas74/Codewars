// Homogenous arrays

/*
Given a two-dimensional array, return a new array which carries over only those arrays from the original, 
which were not empty and whose items are all of the same type (i.e. homogenous). 
For simplicity, the arrays inside the array will only contain characters and integers.

Example:

Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].

Addendum:

Please keep in mind that for this kata, we assume that empty arrays are not homogenous.

The resultant arrays should be in the order they were originally in and should not have its values changed.

No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out.

*/

function filterHomogenous(arrays) {
  return arrays.filter(arr => arr.length == 0 ? false : arr.every(el => typeof el === typeof arr[0]));
}

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]])); // [[1, 5, 4], ['b']]



let filterHomogenous = a => a.filter(b => b.length > 0 && b.every(e => typeof e == typeof b[0]));


function filterHomogenous(arr) {
  return arr.filter(subArr => subArr.length > 0 && subArr.every(val => typeof val === typeof subArr[0]));
}


const filterHomogenous = arrays =>
  arrays.filter(val => val.length && val.every(v => typeof v === typeof val[0]));


function filterHomogenous(arrays) {
  const homo = xs => xs.length > 0 && xs.every(y => typeof y === typeof xs[0])
  return arrays.filter(homo)
}
