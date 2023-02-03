// Area of a Circle

/*
Complete the function circleArea so that it will return the area of a circle with the given radius. 
Round the returned number to two decimal places (except for Haskell). 
If the radius is not positive or not a number, return false.

Example:

circleArea(-1485.86);    //returns false
circleArea(0);           //returns false
circleArea(43.2673);     //returns 5881.25
circleArea(68);          //returns 14526.72
circleArea("number");    //returns false
*/

var circleArea = function (radius) {
  return isNaN(radius) || radius <= 0 ? false : +(Math.PI * radius ** 2).toFixed(2);
};

console.log(circleArea(43.2673)); // 5881.25
console.log(circleArea(-1485.8)); // false
console.log(circleArea("number")); // false
