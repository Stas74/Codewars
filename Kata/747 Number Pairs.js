// Number Pairs

/*
In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.

Example:

let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
*/

function getLargerNumbers(a, b) {
  return a.map((el,i) => el > b[i] ? el : b[i]);
}

console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80])); // [23, 64, 53, 17, 88]
console.log(getLargerNumbers([34, -64, 15, 17, 88], [23, 14, 53, 17, 80])); // [34, 14, 53, 17, 88]




function getLargerNumbers(a, b) {

  var newArray = [];
  
  for ( i=0; i<a.length; i++) {
    newArray.push( Math.max( a[i], b[i] ) );
  }
  
  return newArray;
}



const getLargerNumbers = (a, b) => a.map((v, i) => Math.max(v, b[i]));



const getLargerNumbers = (a, b) => a.reduce((acc, el, i) => [...acc, Math.max(el, b[i])], [])



const getLargerNumbers = (a, b) => 
  a.map((val, idx) => Math.max(val, b[idx]));
