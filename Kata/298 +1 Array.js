// +1 Array

/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]
*/

function upArray(arr) {


  if ((typeof arr === 'undefined') || (arr === null) || (arr.length === 0)) {
      return null;
  }

  for (var i = 0; i < arr.length; i++) {
      if ((arr[i] < 0) || (typeof arr[i] !== 'number') || (arr[i] > 9)) {
          return null;
      }
  }
  // if its 9 and more than one digit we have to check all previous digits
  // whether they are also a 9
  for (var j = arr.length - 1; j > -1; j--) {

      if (arr[j] !== 9) {
          arr[j] = arr[j] + 1;
          break;
      } else {
          arr[j] = 0;
      }

      if (j === 0) {
          arr.unshift(1);
      }
  }


  return arr;
}
  
console.log(upArray([2, 3, 9])); // [2,4,0]
console.log(upArray([4, 3, 2, 5])); // [4,3,2,6]
console.log(upArray([1, -9])); // null
console.log(upArray([
    9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7, 5, 3, 2, 6, 7, 8,
    4, 2, 4, 2, 6, 7, 8, 7, 4, 5, 2, 1,
  ])
);
// [9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7, 5, 3, 2, 6, 7, 8, 4, 2, 4, 2, 6, 7, 8, 7, 4, 5, 2, 2]




const BigNumber = require('bignumber.js');

const upArray = arr =>
  arr.length === 0 || arr.filter(x => x < 0 || x > 9).length > 0
    ? null
    : (new BigNumber(arr.join('')).plus(1))
        .toPrecision()
        .split('')
        .map(Number);


function upArray(arr) {
  if (arr.length == 0 || arr.some(e => e < 0 || e > 9)) return null
  
  let i = arr.length - 1
  
  while (i >= 0 && arr[i] == 9)
    arr[i--] = 0
  
  if (i < 0)
    arr.unshift(1)
  else
    arr[i]++
  
  return arr
}


