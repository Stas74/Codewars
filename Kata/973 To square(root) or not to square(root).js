// To square(root) or not to square(root)

/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.
*/

function squareOrSquareRoot(array) {
  return array.map(el => Number. isInteger(el ** 0.5) ? el ** 0.5 : el * el);
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); // [ 2, 9, 3, 49, 4, 1 ]
console.log(squareOrSquareRoot([100, 101, 5, 5, 1, 1])); // [ 10, 10201, 25, 25, 1, 1 ]



function squareOrSquareRoot(array) {
  return array.map(x => {
    const r = Math.sqrt(x);
    return (r % 1 == 0) ? r : (x * x);
  });  
}



const squareOrSquareRoot = array => array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));



function squareOrSquareRoot(array) {
  return array.map(x => {
    const n = Math.sqrt(x)
    return Number.isInteger(n) ? n : x * x
  })
}



function squareOrSquareRoot(array) {
  return array.map(e => Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : e*e);  
}



const squareOrSquareRoot = $ => $.map(el => el**.5 % 1 ? el*el : el**.5)



const squareOrSquareRoot = array =>
  array.map(val => Number.isInteger(val ** .5) ? val ** .5 : val ** 2);
