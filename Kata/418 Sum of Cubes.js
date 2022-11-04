// Sum of Cubes

/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/

function sumCubes(n) {
  let total = 0;
  while (n > 0) {
    total += n ** 3;
    n--;
  }
  return total;
}

console.log(sumCubes(2)); // 9
console.log(sumCubes(3)); // 36



const sumCubes = n => [...Array(n + 1).keys()].reduce((r, i) => r + i ** 3);


const sumCubes = (n, total = 0, i = 1) => i > n ? total : sumCubes(n, total += Math.pow(i, 3), ++i)


function sumCubes(n){
  if (n == 1) {
    return n ** 3;
  } else {
    return n ** 3 + sumCubes(n - 1);
  }
}
