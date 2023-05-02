// Array2Binary addition

/*

Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

Note: The sum of an empty array is zero.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == false

*/

function arr2bin(arr) {
  return arr.some((el) => typeof el !== "number")
    ? false
    : arr.reduce((prev, cur) => prev + cur, 0).toString(2);
}

console.log(arr2bin([1, 2])); // "11"
console.log(arr2bin([1, 2, "a"])); // false
console.log(arr2bin([1, 2, 3, 4, 5])); // "1111"
console.log(arr2bin([1, 10, 100, 1000])); // "10001010111"



const arr2bin = arr => arr.every(Number.isInteger) && arr.reduce((sum, n) => sum + n, 0).toString(2);



function arr2bin (arr) {

  let sum = 0;

  for (let num of arr)
    if (num !== +num)
      return false;
    else
      sum += num;

  return sum.toString(2);
}



