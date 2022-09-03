// Speed Control

/*
In John's car the GPS records every s seconds the distance travelled from an origin 
(distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:

x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]

The sections are:

0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25

We can calculate John's average hourly speed on every section and we get:

[45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]

Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour 
obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

Example:
with the above data your function gps(s, x)should return 74

Note
With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

 (3600 * delta_distance) / s.
*/

function gps(s, x) {
  if (x.length <= 1) return 0; 
  let aveArr = [];
  for (let i = 1; i < x.length; i++) {
    aveArr.push((3600 * (x[i] - x[i - 1])) / s)    
  }
  return Math.max(...aveArr)
}


console.log(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]))  // 74




const gps = (s, x) => Math.floor(3600 * x.slice(1).reduce((m, d, i) => Math.max(m, d - x[i]), 0) / s);


function gps(s, x) {
  return Math.max(...x.slice(1).map((a, i) => (a - x[i]) / s * 3600)) | 0
}


/**
 * @param {Number} a Start
 * @param {Number} b End
 * @param {Number} s Speed
 * @returns {Number} Speed on section from a to b
 */
const getSpeed = (a, b, s) => Math.floor((b - a) / s * 60 * 60);

/**
 * @param {Number} s Speed
 * @param {Number[]} x X-axis values
 * @returns {Number[]} Array of speed values on passed sections
 */
const reduceRecords = (s, x) => x.reduce(
  (p, c, i, a) => i === 0 ? p : p.concat(getSpeed(a[i-1], c, s)),
  []
);

const gps = (s, x) => x.length < 2 ? 0 : Math.max(...(reduceRecords(s, x)));

/**
 * Hint:
 *
 * arr.reduce and arr.concat is native array methods
 * "a ? b : c" is ternary operator
 * => is arrow functions from ECMAScript-2015
 * const is ECMAScript-2015 feature
 * func(...arr) is spread operator from ECMAScript-2015
 */
