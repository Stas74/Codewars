// Geometry Basics: Distance between points in 2D

/*
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x and y attributes (X and Y in C#) attributes.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places.
*/

function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

console.log(distanceBetweenPoints(new Point(3, 3), new Point(3, 3))); // 0
console.log(distanceBetweenPoints(new Point(1, 6), new Point(4, 2))); // 5




function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}


