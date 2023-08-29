// Quadrants

/*
Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). 
x and y are non-zero integers, therefore the given point never lies on the axes.

Examples
(1, 2)     => 1
(3, 5)     => 1
(-10, 100) => 2
(-1, -9)   => 3
(19, -56)  => 4

There are four quadrants:

First quadrant, the quadrant in the top-right, contains all points with positive X and Y
Second quadrant, the quadrant in the top-left, contains all points with negative X, but positive Y
Third quadrant, the quadrant in the bottom-left, contains all points with negative X and Y
Fourth quadrant, the quadrant in the bottom-right, contains all points with positive X, but negative Y
*/

function quadrant(x, y) {
  if (x > 0) {
    return y > 0 ? 1 : 4;
  } else {
    return y > 0 ? 2 : 3;
  }
}

console.log(quadrant(1, 2)); // 1
console.log(quadrant(3, 5)); // 1
console.log(quadrant(-10, 100)); // 2
console.log(quadrant(-1, -9)); // 3
console.log(quadrant(19, -56)); // 4




function quadrant(x, y) {
  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  return 4;
}


function quadrant(x, y) {
  return x > 0 ? y > 0 ? 1 : 4 : y > 0 ? 2 : 3;
}


const quadrant = (x, y) => [3, 4, 2, 1][Math.sign(x) / 2 + Math.sign(y) + 1.5]


