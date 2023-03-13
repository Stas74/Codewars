// Beginner Series #5 Triangular Numbers

/*
Triangular number is any amount of points that can fill an equilateral triangle.

Example: the number 6 is a triangular number because all sides of a triangle has the same amount of points.

alt text

Hint!
T(n) = n * (n + 1) / 2,
n - is the size of one side.
T(n) - is the triangular number.
Given a number T from interval [1..2147483646], find if it is triangular number or not.
*/

function isTriangular(t) {
  return Number.isInteger((-1 + (1 + 8 * t) ** 0.5) / 2);
}

console.log(isTriangular(1)); // true
console.log(isTriangular(3)); // true
console.log(isTriangular(6)); // true
console.log(isTriangular(2)); // false
console.log(isTriangular(7)); // false
console.log(isTriangular(14)); // false



function isTriangular(t) {
  return Math.sqrt(8*t + 1) % 1 == 0;
}


function isTriangular(t) {
  for (let i = 1,n = 1;i<=t; n++){
    i = n*(n+1)/2;
    if (i==t) return true
  }
  return false;
}



function isTriangular(t) {
  var i=1, s=0;
  while (s < t)
    s += i++;
  return s == t;
}



const isTriangular = t =>
  Number.isInteger((1 + (t << 3)) ** .5);
