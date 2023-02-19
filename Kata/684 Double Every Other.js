// Double Every Other

/*
Write a function that doubles every second integer in a list, starting from the left.

Example:

For input array/list :

[1,2,3,4]
the function should return :

[1,4,3,8]
*/

function doubleEveryOther(a) {
  return a.map((el, i) => (i % 2 ? el * 2 : el));
}

console.log(doubleEveryOther([1, 2, 3, 4])); // [1,4,3,8]


const doubleEveryOther = a =>
  a.map((val, idx) => val * (idx % 2 + 1));


function doubleEveryOther(a) {
  for(let i = 1; i < a.length; i += 2) {
    a[i] *= 2;
  }
  return a;
}



const doubleEveryOther = (a) => a.map((x, i) => i % 2 === 0 ? x : x + x);



const doubleEveryOther = (a) => a.map((x, i) => i % 2 === 0 ? x : x + x);
