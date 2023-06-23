// ASC Week 1 Challenge 5 (Medium #2)

/*
Create a function that takes a 2D array as an input, and outputs another array 
that contains the average values for the numbers in the nested arrays at the corresponding indexes.

Note: the function should also work with negative numbers and floats.

Examples
[ [1, 2, 3, 4], [5, 6, 7, 8] ]  ==>  [3, 4, 5, 6]

1st array: [1, 2, 3, 4]
2nd array: [5, 6, 7, 8]
            |  |  |  |
            v  v  v  v
average:   [3, 4, 5, 6]
And another one:

[ [2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34] ]  ==>  [22.5, 11, 38.75, 38.25, 19.5]

1st array: [  2,   3,    9,   10,    7]
2nd array: [ 12,   6,   89,   45,    3]
3rd array: [  9,  12,   56,   10,   34]
4th array: [ 67,  23,    1,   88,   34]
              |    |     |     |     |
              v    v     v     v     v
average:   [22.5, 11, 38.75, 38.25, 19.5]
*/

function avgArray(arr) {
  let finArr = [];
  for (let i = 0; i < arr[0].length; i++) {
    finArr.push(arr.reduce((prev, cur) => prev + cur[i], 0) / arr.length);
  }
  return finArr;
}


console.log(avgArray([[1, 2, 3, 4], [5, 6, 7, 8]])); // [3, 4, 5, 6]
console.log(avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]])); 
// [22.5, 11, 38.75, 38.25, 19.5]
console.log(avgArray([[1.2, 8.521, 0.4, 3.14, 1.9], [2, 4.5, 3.75, 0.987, 1.0]])); // [1.6, 6.5105, 2.075, 2.0635, 1.45]


const avgArray = arr =>
  arr[0].map((_, idx) => arr.reduce((pre, val) => pre + val[idx], 0) / arr.length);



function avgArray(arr) {
  return arr
    .reduce((acc, cur) => {
      return acc.map((n, i) => n + cur[i]);
    })
    .map(n => n / arr.length);
}


function avgArray(arr) {
  var result=[];
  for(var i in arr[0]){
    var num=0;
    for(var j in arr){
      num+=arr[j][i];
    }
    result.push(num/arr.length);
  }
  return result;
}


