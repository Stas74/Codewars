// Check if a triangle is an equable triangle!

/*
A triangle is called an equable triangle if its area equals its perimeter. 
Return true, if it is an equable triangle, else return false. 
You will be provided with the length of sides of the triangle. 
Happy Coding!
*/

function equableTriangle(a, b, c) {
  let perimeter = a + b + c;
  let semiPer = perimeter / 2;
  let area = Math.sqrt(semiPer * (semiPer - a) * (semiPer - b) * (semiPer - c));
  return perimeter == area;
}

console.log(equableTriangle(5, 12, 13)); // true
console.log(equableTriangle(2, 3, 4)); // false
console.log(equableTriangle(6, 8, 10)); // true
console.log(equableTriangle(17, 17, 30)); // false
