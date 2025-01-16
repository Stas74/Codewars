// Cut array into smaller parts

/*
Write a function that takes two arguments:

An array: The array to be split into smaller parts.
Chunk size: A positive integer, which is the size of each chunk.
This function should split the given array into parts with the given chunk size, and return the result as a nested array.

If the array cannot be evenly divided by the size, the last part may contain fewer elements.

If an array of size 123 is given and the chunk size is 10, the function will split the array into 13 smaller parts:

The first 12 parts will each have a size of 10.
The final part will contain the remaining 3 elements.
Examples:
Array: [1, 2, 3]
Chunk size: 1
Expected solution --> [[1], [2], [3]]

Array: [1, 2, 3, 4, 5] 
Chunk size: 2
Expected solution --> [[1, 2], [3, 4], [5]]
*/

function makeParts(arr, chunkSize) {
  let finArr = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    finArr.push(arr.slice(i, i + chunkSize));
  }
  return finArr;
}

console.log(makeParts([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
console.log(makeParts([1, 2, 3], 1)); // [[1],[2],[3]]




function makeParts(arr, chunkSize) {
	let newArr = [];
  while (arr.length > 0){
    newArr.push(arr.splice(0, chunkSize));
    }
  return newArr;
}



const makeParts = (arr, chunkSize) =>
  [...Array(Math.ceil(arr.length / chunkSize))].map(val => arr.splice(0, chunkSize));



function makeParts(arr, chunkSize) {
  return arr.length <= chunkSize ? [arr] : ([arr.slice(0, chunkSize), ...makeParts(arr.slice(chunkSize), chunkSize)]);
}


const makeParts = require('lodash').chunk;



const makeParts = (a, k) => Array.from({length: Math.ceil(a.length/k)}, (_, i) => a.slice(k*i, k*(i + 1)));



