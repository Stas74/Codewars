// Merge two arrays

/*
Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
Points:

The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
*/

function mergeArrays(a, b) {
  let finArr = [];
  let len = a.length >= b.length ? a.length : b.length;
  for (let i = 0; i < len; i++) {
    if (a[i]) finArr.push(a[i]);
    if (b[i]) finArr.push(b[i]);
  }
  return finArr;
}

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ["a", "b", "c", "d", "e"])); // [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]
console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])); // ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]



function mergeArrays(a, b) {
  // your code here
  var returnArray = [];
  var counter = 0;
  while (a[counter] || b[counter] ){
    if(a[counter]){
      returnArray.push(a[counter]);
    }
    if(b[counter]){
      returnArray.push(b[counter]);
    }
    counter++;    
   }
   return returnArray;
}



function mergeArrays(a, b) {
  var answer = [];  
  for (i = 0; i < Math.max(a.length, b.length); i++){
    if (i < a.length) {answer.push(a[i]);}
    if (i < b.length) {answer.push(b[i]);}
  }  
  return answer;
}



const _ = require('lodash')

function mergeArrays(a, b) {
  return _.compact(_.flatten(_.zip(a, b)))
}




const mergeArrays = ( $ , $2) => [...Array($.length + $2.length)].reduce((acc, el, i) => acc.concat( $[i],$2[i]), []).filter(e => e)
