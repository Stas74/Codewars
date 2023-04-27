// Pairs of integers from m to n

/*

Implement a function that receives two integers m and n and generates a sorted list of pairs (a, b) such that m <= a <= b <= n.

The input m will always be smaller than or equal to n (e.g., m <= n)

Example
m = 2
n = 4

result = [(2, 2), (2, 3), (2, 4), (3, 3), (3, 4), (4, 4)]

*/

function generatePairs(m, n) {
  const finArr = [];
  for (let i = m; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      finArr.push([i, j]);
    }
  }
  return finArr;
}

console.log(generatePairs(2, 4)); // [ [2, 2], [2, 3], [2, 4], [3, 3], [3, 4], [4, 4] ]



const generatePairs = (m, n) =>
  m > n ? [] : [...[...Array(n - m + 1)].map((_, idx) => [m, m + idx]), ...generatePairs(++m, n)];



range = (a, z, r = []) => (a < z ? range(a + 1, z, [r.push(a), r][1]) : r);

generatePairs = (m, n) =>
  range(m, ++n).reduce((a, y) => a.concat(range(y, n).map((x) => [y, x])), []);


