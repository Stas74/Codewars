// Billiards triangle

/*
IRemember the triangle of balls in billiards? 
To build a classic triangle (5 levels) you need 15 balls. 
With 3 balls you can build a 2-level triangle, etc.

For more examples,

pyramid(1) == 1
pyramid(3) == 2
pyramid(6) == 3
pyramid(10) == 4
pyramid(15) == 5

Write a function that takes number of balls (≥ 1) and calculates how many levels you can build a triangle.
*/

function pyramid(balls) {
  const array = Array.from({ length: balls }, (_, i) => i + 1);
  while (array.reduce((prev, cur) => prev + cur, 0) > balls) {
    array.pop();
  }
  return balls == 1 ? 1 : array.length;
}

console.log(pyramid(1)); // 1
console.log(pyramid(2)); // 1
console.log(pyramid(4)); // 2
console.log(pyramid(20)); // 5




function pyramid(balls) {
  return Math.floor((Math.sqrt(balls * 8 + 1) - 1) / 2);
}



const pyramid = balls =>
  (balls * 8 + 1) ** .5 - 1 >> 1;



function pyramid(balls) {
  let out = 0;
  while( balls > out )
  balls -= (out += 1);
  return out === 1 ? 1 : out;
}



function pyramid(balls) {
  var level = 0;
  while (balls >= level+1){
    level++;
    balls -= level;
  }
  return level;
}
