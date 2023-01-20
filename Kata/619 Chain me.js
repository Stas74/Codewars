// Chain me

/*
Write a generic function chainer

Write a generic function chainer that takes a starting value, and an array of functions 
to execute on it (array of symbols for Ruby).

The input for each function is the output of the previous function 
(except the first function, which takes the starting value as its input). 
Return the final value after execution is complete.

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

chain(2, [add, mult]);
// returns 90;
*/

function chain(input, fs) {
  return fs.reduce((prev, cur) => cur(prev), input);
}


function add(x) {
  return x + 10;
}
function mult(x) {
  return x * 30;
}

console.log(chain(2, [add, mult])); // 360
