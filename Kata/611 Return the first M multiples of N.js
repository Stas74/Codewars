// Return the first M multiples of N

/*
Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. 
Assume that m is a positive integer.

Ex.

multiples(3, 5.0)
should return

[5.0, 10.0, 15.0]
*/

function multiples(m, n) {
  const finArr = [n];
  let startVal = n
  while (m - 1 > 0) {
    startVal += n
    finArr.push(startVal);
    m--;
  }
  return finArr;
}

console.log(multiples(3, 5)); // [5, 10, 15]



function multiples(m, n){
  var arr = [];
  for (var i = 1; i <= m; ++i)
    arr.push(n * i);
  return arr;
}



function multiples(m, n){
	return Array.from(Array(m), (_v, i) => (i + 1) * n);
}

const multiples = (m, n) => Array.from({ length: m }).map((_, i) => ++i * n);

const multiples = (m, n) =>
  [...Array(m)].map((_, idx) => ++idx * n);
