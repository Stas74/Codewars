// Find out whether the shape is a cube

/*
To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: the sides must be integers
*/

var cubeChecker = function(volume, side){
  return volume <= 0 ? false : side === Math.cbrt(volume);
};

console.log(cubeChecker(56.3, 1))  // false
console.log(cubeChecker(-1, 2))  // false
console.log(cubeChecker(125, 5))  // true




var cubeChecker = function(v, s){
  return s > 0 && v == s * s * s;
};



var cubeChecker = function(volume, side){
  return Math.pow(side, 3) === volume && side > 0;
};


const cubeChecker = (volume, side) => volume > 0 && side > 0 && volume === Math.pow(side, 3);
