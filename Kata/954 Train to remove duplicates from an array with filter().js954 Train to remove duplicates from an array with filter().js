// Train to remove duplicates from an array with filter()

/*
In this kata your task is to remove all the duplicates from the array using a standart build-in method - Array.prototype.filter();
 return the array containing unique values only.

Tip: use the index of value(s) to solve this kata

If you are not familiar with filter() - info is here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

For example:

var arr = [4];

unique(arr); // should return [4]

var arr = [1,1,1,2,2,3];

unique(arr); // should return [1,2,3]

*/

function unique(arr) {
  return arr.filter((el, i) => arr.indexOf(el) == i);
}

// return Array.from(new Set(arr));

console.log(unique([4])); // [4]
console.log(unique([1, 2, 2, 3])); // [1,2,3]
