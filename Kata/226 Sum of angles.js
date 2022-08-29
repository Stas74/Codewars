// Sum of angles

/*
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.
*/

function angle(n) {
  return 180 * (n - 2)  
}

// The sum of the interior angles, in degrees, of a regular polygon is given by the formula 180(n – 2),
// where n is the number of sides

console.log(angle(3)) // 180
console.log(angle(4)) // 360



let angle = n => n * 180 - 360;

