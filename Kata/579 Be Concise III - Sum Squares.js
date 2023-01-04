// Be Concise III - Sum Squares

/*
You are given a program sumSquares that takes an array as input and returns 
the sum of the squares of each item in an array. For example:

sumSquares([1,2,3,4,5]) === 55 // 1 ** 2 + 2 ** 2 + 3 ** 2 + 4 ** 2 + 5 ** 2
sumSquares([7,3,9,6,5]) === 200
sumSquares([11,13,15,18,2]) === 843
Shorten the code such that it meets the requirements.

A few hints:
Try researching about built-in Array methods; they may help shorten your code a lot
Good luck!
*/

function sumSquares(array) {
  return array.reduce((prev, cur) => prev + cur ** 2, 0);
}

console.log(sumSquares([1, 2, 3, 4, 5])); // 55
console.log(sumSquares([7, 3, 9, 6, 5])); // 200




let sumSquares = a => a.reduce((s, x) => s + x * x, 0)



// An alternative solution using both map and reduce
var sumSquares=a=>a.map(x=>x*x).reduce((x,y)=>x+y);
