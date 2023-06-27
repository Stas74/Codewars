// Alternating between three values

/*
Suppose a variable x can have only three possible different values a, b and c, 
and you wish to assign to x the value other than its current one, and you wish your code 
to be independent of the values of a, b and c.

What is the most efficient way to cycle among three values? Write a function f so that it satisfies

  f(a) = b
  f(b) = c
  f(c) = a
EXAMPLE
  f( 3, { a:3, b:4, c:5 } ) => 4
*/

function f(x, cc) {
  const arrValues = Object.values(cc);
  return arrValues.concat(arrValues[0])[arrValues.indexOf(x) + 1];
}

console.log(f(3, { a: 3, b: 4, c: 5 })); // 4
console.log(f(4, { a: 3, b: 4, c: 5 })); // 5
console.log(f(5, { a: 3, b: 4, c: 5 })); // 3
