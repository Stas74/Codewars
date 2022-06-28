// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// function maps(x){

// }

function maps(x){
  const doubledArr = [];
  x.forEach(element => doubledArr.push(element * 2));
  return doubledArr;
}


// function maps(x){
//   return x.map(n => n * 2);
// }
