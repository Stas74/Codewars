// Pyramid Array

/*
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s
*/

function pyramid(n) {
  let finArr = [];
  for (let i = 0; i < n; i++) {
    finArr.push(new Array(i + 1).fill(1));
  }
  return finArr;
}

console.log(pyramid(0)); // []
console.log(pyramid(1)); // [[1]]
console.log(pyramid(2)); // [[1], [1, 1]]
console.log(pyramid(3)); // [[1], [1, 1], [1, 1, 1]]




function pyramid(n) {
  const res = [];
  for(let i = 0; i < n; i++){
    res.push([...Array(i+1)].fill(1))
  }
  return res;
}



function pyramid(n) {
  return Array(n).fill().map((e,i) => Array(i+1).fill(1))
}




const pyramid = n => Array(n).fill(1).map((x, i) => Array(i + 1).fill(1))




function pyramid(n) {
  let arr = (n > 0) ? [[1]] : [];
  for (let i = 0; i < n - 1; i++) {
    arr.push([...arr[i], 1]);
  }
  return arr;
}



