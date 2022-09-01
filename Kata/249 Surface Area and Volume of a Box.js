// Surface Area and Volume of a Box

/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

// checkExam = (x, y) => (x = y.reduce((s, e, i) => s + (e === x[i] ? 4 : e === '' ? 0 : -1), 0)) > 0 ? x : 0;

function getSize(width, height, depth) { 
  return [2 * height * width + 2 * height * depth + 2 * depth * width, width * height * depth]
}


console.log(getSize(4, 2, 6)); // [88, 48]
console.log(getSize(10, 10, 10)); // [600, 1000]
