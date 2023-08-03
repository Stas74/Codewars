// Product of Largest Pair

/*
Rick wants a faster way to get the product of the largest pair in an array. 
Your task is to create a performant solution to find the product of the largest two integers 
in a unique array of positive numbers.

All inputs will be valid.
Passing [2, 6, 3] should return 18, the product of [6, 3].

Disclaimer: only accepts solutions that are faster than his, which has a running time O(nlogn).

maxProduct([2, 1, 5, 0, 4, 3])              // 20
maxProduct([7, 8, 9])                       // 72
maxProduct([33, 231, 454, 11, 9, 99, 57])   // 104874
*/

function maxProduct(a) {
  let biggestNum = Math.max.apply(Math, a);
  a.splice(a.indexOf(biggestNum), 1);
  return biggestNum * Math.max.apply(Math, a);
}

// Low speed solution
// let sortedArr = a.sort((a, b) => b - a);
// return sortedArr[0] * sortedArr[1];

console.log(maxProduct([56, 335, 195, 443, 6, 494, 252])); // 218842
console.log(maxProduct([154, 428, 455, 346])); // 194740
console.log(maxProduct([136, 376, 10, 146, 105, 63, 234])); // 87984
