// Series of integers from m to n

/*
Write a function that accepts two arguments and generates a sequence containing 
the integers from the first argument to the second inclusive.

Input
Pair of integers greater than or equal to 0. The second argument will always be greater than or equal to the first.

Example
generateIntegers(2, 5) // --> [2, 3, 4, 5]
*/

function generateIntegers(m, n) {
  let finArr = [];
  while (m <= n) {
    finArr.push(m);
    m++;
  }
  return finArr;
}

console.log(generateIntegers(2, 5)); // [2, 3, 4, 5]




function generateIntegers(m, n) {
  return Array.from({ length: n - m + 1 }, (_, i) => i + m);
}


function generateIntegers(m, n) {
  return Array.from({ length: n - m + 1 }, (_, i) => i + m);
}


const generateIntegers = (m, n) => 
  [...Array(++n).keys()].slice(m);
