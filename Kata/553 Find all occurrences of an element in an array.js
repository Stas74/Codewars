// Find all occurrences of an element in an array

/*
Given an array (a list in Python) of integers and an integer n, find all occurrences of n 
in the given array and return another array containing all the index positions of n in the given array.

If n is not in the given array, return an empty array [].

Assume that n and all values in the given array will always be integers.

Example:

findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
*/

const findAll = (array, n) => {
  return array.map((el, i) => (el == n ? i : '')).filter(n => n !== '');
}

console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3)); // [2, 4]
console.log(findAll([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16)); // [1, 9]
console.log(findAll([20, 20, 10, 13, 15, 2, 7, 2, 20, 3, 18, 2, 3, 2, 16, 10, 9, 9, 7, 5, 15, 5], 20)); // [0, 1, 8]



const findAll = (array, n) => {
  let a = []; 
  array.forEach( (v,i) => {if (v===n) {a.push(i)} } )
  return a
}



const findAll = (nums, find) => nums
  .reduce((acc, num, index) => num === find ? [...acc, index] : acc, [])


const findAll = (arr, n) => arr.map((el, i) => el === n ? i : 'str').filter(e => e !== 'str')
