// Flatten and sort an array

/*
Given a two-dimensional array of integers, return the flattened version of the array with all the integers 
in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically.
*/


function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return array.flat().sort( (a, b) =>  a - b );
}

console.log(flattenAndSort([]))  // []
console.log(flattenAndSort([[], [1]]))  // [1]
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))  // [1, 2, 3, 4, 5, 6, 7, 8, 9]




function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}



function flattenAndSort(array) {
  return array
    .reduce((result, current) => [...result, ...current],[])
    .sort((a, b) => a - b)
    ;
}
