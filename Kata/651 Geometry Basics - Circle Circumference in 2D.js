// Geometry Basics: Circle Circumference in 2D

/*
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a number.

Write a function calculating circumference of a Circle.

Tests round answers to 6 decimal places.
*/

// Represents a Circle where center is a Point and radius is a Number
class Circle {
  constructor(center, radius) { 
    this.center = center; 
    this.radius = radius;
  }
}

// Represents a Point where x and y are Numbers
class Point {
  constructor (x,y) { 
    this.x = x;
    this.y = y; 
  }
}

function circleCircumference(circle) {
  return circle.radius * 2 * Math.PI;
}

console.log(circleCircumference( new Circle( new Point(10, 10), 30))); // 188.495559
