// Pairs of integers from 0 to n

/*

Write a function generatePairs (Javascript) / generate_pairs (Python / Ruby) that accepts an integer argument n 
and generates an array containing the pairs of integers [a, b] that satisfy the following conditions:

0 <= a <= b <= n
The pairs should be sorted by increasing values of a then increasing values of b.

For example,

generatePairs(2) should return
[ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]

*/

function generatePairs(n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      arr.push([i, j]);
    }
  }
  return arr;
}

console.log(generatePairs(2)); //  [ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]



const generatePairs = (n, a = 0) => a > n ? [] : Array.from({length: n-a+1}, (_, i) => [a, a+i]).concat(generatePairs(n, a+1));


function generatePairs(n) {
  let rng = (n) => [...Array(n).keys()];
  return [].concat(...rng(++n).map((x) => rng(n - x).map((y) => [x, x + y])));
}


// recursion
{const f =generatePairs= (n, a = 0, b = 0) =>
  b < n ? [[a, b], ...f(n, a, ++b)] :
  a < n ? [[a, b], ...f(n, ++a, a)] :
  [[a, b]]}



const generatePairs = (n, val = 0) =>
  n < val ? [] : [...Array(n - val + 1)].map((_, idx) => [val, val + idx]).concat(generatePairs(n, ++val));


