// Pillars

/*
There are pillars near the road. 
The distance between the pillars is the same and the width of the pillars is the same. 
Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters 
(without the width of the first and last pillar).
*/

function pillars(numPill, dist, width) {
  return numPill < 2 || dist < 10 && dist > 30 || width < 10 && width > 50 ? 0 : dist * 100 * (numPill - 1) + (numPill - 2) * width
}

console.log(pillars(1, 10, 10)); // 0
console.log(pillars(2, 20, 25)); // 2000
console.log(pillars(11, 15, 30)); // 15270




function pillars(num_pill, dist, width) {
  return num_pill <= 1 ? 0 : (num_pill - 1) * dist * 100 + (num_pill - 2) * width;
}


const pillars = (n, d, w) => Math.max(0, n - 1) * (d * 100) + Math.max(0, n - 2) * w; 
