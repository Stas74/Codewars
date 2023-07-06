// Sum of a nested list

/*
Implement a function to calculate the sum of the numerical values in a nested list. For example :

sumNested([1, [2, [3, [4]]]]) => 10
*/

const sumNested = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += sumNested(arr[i]);
    } else {
      sum += arr[i];
    }
  }
  return sum;
};

console.log(sumNested([1, 2, 3, 4])); // 10
console.log(sumNested([[1, 2, 3, 4]])); // 10
console.log(sumNested([1, [1], [[1]], [[[1]]]])); // 4



const sumNested = arr => {
  if (Array.isArray(arr)) {
    return arr.reduce(function(accumulator, currentValue) {
      return accumulator + sumNested(currentValue);
    }, 0);
  } else {
    return arr;
  }
};



const R = require('ramda'), sumNested = R.pipe(R.flatten, R.sum);



const _ = require('lodash');
const sumNested = arr => _(arr).flattenDeep().sum();



const sumNested = (arr) => arr.reduce((acc,e) => {
  if (e instanceof Array) {
    return acc + sumNested(e);
  }
  return acc + e;
}, 0);



const sumNested = (arr) => arr.reduce((acc,e) => {
  if (e instanceof Array) {
    return acc + sumNested(e);
  }
  return acc + e;
}, 0);



const sumNested = arr => {
  if ( arr.length == 0 ) return 0;
  var value =  ( Array.isArray( arr[0] )) ? sumNested( arr[0] ) : arr[0];
  return sumNested( arr.slice( 1, arr.length )) + value;
};


const sumNested = arr => arr.reduce(
  (a, b) => a + (Array.isArray(b) ? sumNested(b) : b)
, 0);


const sumNested = arr =>
  arr.reduce((pre, val) => pre + (Array.isArray(val) ? sumNested(val) : val), 0);
