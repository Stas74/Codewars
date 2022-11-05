// Basic Sequence Practice

/*
A sequence or a series, in mathematics, is a string of objects, like numbers, that follow a particular pattern. 
The individual elements in a sequence are called terms. 
A simple example is 3, 6, 9, 12, 15, 18, 21, ..., where the pattern is: "add 3 to the previous term".

In this kata, we will be using a more complicated sequence: 0, 1, 3, 6, 10, 15, 21, 28, ... 
This sequence is generated with the pattern: "the nth term is the sum of numbers from 0 to n, inclusive".

[ 0,  1,    3,      6,   ...]
  0  0+1  0+1+2  0+1+2+3

Your Task
Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 
of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.

Examples
 5  -->  [0,  1,  3,  6,  10,  15]
-5  -->  [0, -1, -3, -6, -10, -15]
 7  -->  [0,  1,  3,  6,  10,  15,  21,  28]
*/

function sumOfN(n) {
  let finArr = [0];
  for (let i = 1; i <= Math.abs(n); i++) {
    finArr.push(finArr[i - 1] + i);
  }
  return n > 0 ? finArr : finArr.map((el, i) => i == 0 ? 0 : -el);
}

console.log(sumOfN(3)); // [0, 1, 3, 6]
console.log(sumOfN(-4)); // [0, -1, -3, -6, -10]



function sumOfN(n) {
  var array = [];
  array[0] = 0;
  for (var i = 1; i < Math.abs(n)+1; i++) {
    if (n > 0) array[i] = array[i-1]+i;
    else array[i] = array[i-1]-i;
  }
  return array;
};



function sumOfN(n) {
  let sign = n < 0 ? -1 : 1;
  return Array.apply(null, Array(Math.abs(n))).reduce((acc, c, i) => { acc.push(acc[i] + (i + 1) * sign); return acc}, [0]);
};



function sumOfN(n) {
  for (var i = 0, list = []; i <= Math.abs(n); i++) {
    list.push((list[i - 1] || 0) + i * (n < 0 ? -1 : 1))
  }
  
  return list
}
