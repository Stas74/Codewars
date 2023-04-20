// Arguments to Binary addition

/*

Given an array add all the number elements and return the binary equivalent of that sum; 
to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0'

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
This is a modification on the Kata: Array2Binary addition hope you like it

*/

function arr2bin(arr) {
  return arr
    .reduce((prev, cur) => prev + (typeof cur == "number" ? cur : 0), 0)
    .toString(2);
}

// return arr
//     .reduce((prev, cur) => prev + (parseInt(cur) ? cur : 0), 0)
//     .toString(2);

console.log(arr2bin([1, 2])); // "11"
console.log(arr2bin([1, 2, 3, 4, 5])); // "1111"
console.log(arr2bin([1, 10, 100, 1000])); // "10001010111"
console.log(arr2bin([null])); // "0"
console.log(arr2bin([true, true, false, 15])); // "1111"
