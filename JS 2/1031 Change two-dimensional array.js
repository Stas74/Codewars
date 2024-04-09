// Change two-dimensional array

/*
Function receive a two-dimensional square array of random integers. 
On the main diagonal, all the negative integers must be changed to 0, while the others must be changed to 1 
(Note: 0 is considered non-negative, here).

(You can mutate the input if you want, but it is a better practice to not mutate the input)

Example:

Input array

[
  [-1,  4, -5, -9,  3 ],
  [ 6, -4, -7,  4, -5 ],
  [ 3,  5,  0, -9, -1 ],
  [ 1,  5, -7, -8, -9 ],
  [-3,  2,  1, -5,  6 ]
]
Output array

[
  [ 0,  4, -5, -9,  3 ],
  [ 6,  0, -7,  4, -5 ],
  [ 3,  5,  1, -9, -1 ],
  [ 1,  5, -7,  0, -9 ],
  [-3,  2,  1, -5,  1 ]
]

*/

function matrix(array) {
  const arrCopy = array.slice();
  for (let i = 0; i < arrCopy.length; i++) {
    arrCopy[i][i] < 0 ? (arrCopy[i][i] = 0) : (arrCopy[i][i] = 1);
  }
  return arrCopy;
}

console.log(
  matrix([
    [-1, 4, -5, -9, 3],
    [6, -4, -7, 4, -5],
    [3, 5, 4, -9, -1],
    [1, 5, -7, -8, -9],
    [-3, 2, 1, -5, 6],
  ])
);

// [
//   [0, 4, -5, -9, 3],
//   [6, 0, -7, 4, -5],
//   [3, 5, 1, -9, -1],
//   [1, 5, -7, 0, -9],
//   [-3, 2, 1, -5, 1],
// ];




function matrix(array) {
    for (let i=0; i<array.length; i++) {
      array[i][i] = array[i][i] < 0 ? 0 : 1
    }
    return array;
}



function matrix(a) {
  return a.map((a, i) => a.map((a, j) => (i == j ? +!(a < 0) : a)));
}



const matrix = array => array.map((i, x) => i.map((j, y) => x == y ? +!(j < 0) : j))



const matrix = (arr) => 
  arr.map((part, i)=> part.map((el, j) => j === i ? el < 0 ? 0 : 1 : el))



const matrix = array =>
  array.map((val, idx) => val.map((v, i) => i === idx ? +(v >= 0) : v));
