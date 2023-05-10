// Find within array

/*

We'll create a function that takes in two parameters:

a sequence (length and types of items are irrelevant)
a function (value, index) that will be called on members of the sequence and their index. 
The function will return either true or false.
Your function will iterate through the members of the sequence in order until the provided function returns true; 
at which point your function will return that item's index.

If the function given returns false for all members of the sequence, your function should return -1.

var trueIfEven = function(value, index) { return (value % 2 === 0) };
findInArray([1,3,5,6,7], trueIfEven) // should === 3

*/


var findInArray = function (array, iterator) {
  for (let i = 0; i < array.length; i++) {
    if (iterator(array[i], i)) {
      return i;
    }
  }
  return -1;
};

var trueIfEven = function (value, index) {
  return value % 2 === 0;
};
var trueIfValueEqualsIndex = function(v, i) { return v === i; }
var trueIfLengthEqualsIndex = function(v, i) { return v.length === i; }


console.log(findInArray([1, 3, 5, 6, 7], trueIfEven)); // 3
console.log(findInArray([2, 4, 6, 8], trueIfEven)); // 0
console.log(findInArray([13,5,3,1,4,5], trueIfValueEqualsIndex)); // 4
console.log(findInArray(["one","two","three","four","five","six"], trueIfLengthEqualsIndex)); // 4
