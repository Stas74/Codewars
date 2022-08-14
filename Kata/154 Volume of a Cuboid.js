// Volume of a Cuboid

// Bob needs a fast way to calculate the volume of a cuboid with three values: 
// the length, width and height of the cuboid. Write a function to help Bob with this calculation.

function getVolumeOfCuboid(length, width, height) {
  return length * width * height
}

console.log(getVolumeOfCuboid(1,2,2)); // 4
console.log(getVolumeOfCuboid(6.3,2,5)); // 63



var Kata = (() => {
  this.getVolumeOfCuboid = (l, w, h) => l * w * h;
  return this;
})();
