// Complete Series

/*
You are given an array of non-negative integers, 
your task is to complete the series from 0 to the highest number in the array.

If the numbers in the sequence provided are not in order you should order them, but if a value repeats, 
then you must return a sequence with only one item, and the value of that item must be 0. like this:

inputs        outputs
[2,1]     ->  [0,1,2]
[1,4,4,6] ->  [0]
Notes: all numbers are positive integers.

This is set of example outputs based on the input sequence.

inputs        outputs
[0,1]   ->    [0,1]
[1,4,6] ->    [0,1,2,3,4,5,6]
[3,4,5] ->    [0,1,2,3,4,5]
[0,1,0] ->    [0]
*/

function completeSeries(arr) {
  return arr.length != [...new Set(arr)].length
    ? [0]
    : Array.from(Array(Math.max(...arr) + 1).keys());
}

console.log(completeSeries([0, 1, 0])); // [0]
console.log(completeSeries([1, 4, 6])); // [0,1,2,3,4,5,6]
console.log(completeSeries([3, 4, 5])); // [0,1,2,3,4,5]



function completeSeries(arr) {
    return new Set(arr).size === arr.length ? [...Array(Math.max(...arr)+1).keys()] : [0];
}



function completeSeries(arr) {
  let dup = arr.filter((el) => arr.indexOf(el) !== arr.lastIndexOf(el));
  let arr1 = [];
  if (dup.length > 0) return [0];
  else {
    for (let i = 0; i <= Math.max(...arr); i++) {
      arr1.push(i);
    }
  }
  return arr1;
}



function completeSeries(arr) {
  return arr.length == new Set(arr).size ? [...Array(Math.max(...arr) + 1)].map((_, i) => i) : [0];
}



const completeSeries = function( arr ) {
  const maxEl = Math.max(...arr);
  const arrOut = Array.from({length: maxEl+1}, (_,i)=> i);
  return arrOut.some(el => arr.filter(e => e == el).length > 1) ? [0] : arrOut
}


