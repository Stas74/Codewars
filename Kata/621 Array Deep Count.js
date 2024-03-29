// Array Deep Count

/*
You are given an array. 
Complete the function that returns the number of ALL elements within an array, including any nested arrays.

Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
The input will always be an array.
*/

function deepCount(a){
  return a.reduce((sum, el) => sum + (Array.isArray(el) ? deepCount(el) : 0), a.length);
}
// arr.flat(Infinity).length; - count all elements of the array
// const sumUp = array => array.reduce((sum, el) => sum + (Array.isArray(el) ? sumUp(el) : +el), 0); - sum all number elements

console.log(deepCount([1, 2, 3])); // 3
console.log(deepCount(["x", "y", ["z"]])); // 4
console.log(deepCount([1, 2, [3, 4, [5]]])); // 7
console.log(deepCount([[[[[[[[[]]]]]]]]])); // 8



function deepCount(a) {
  let count = a.length;
  for (let i = 0; i < a.length; i++)
    if (Array.isArray(a[i])) count += deepCount(a[i]);
  return count;
}


const deepCount = a =>
  a.reduce((pre, val) => ++pre + (Array.isArray(val) && deepCount(val)), 0);


function deepCount(a){
  return a.reduce((acc,el) => Array.isArray(el) ? acc+=deepCount(el) : acc, a.length);
}


function deepCount(a) {
  return JSON.stringify(a).replace(/[^[,]|\[]/g, '').length;
}
