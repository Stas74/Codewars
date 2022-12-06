// Type of sum

/*
Return the type of the sum of the two arguments
*/

function typeOfSum(a, b) {
  return typeof (a + b);
}

console.log(typeOfSum(12, 1)); //  'number'
console.log(typeOfSum("d", 1)); //  'string'
console.log(typeOfSum(true, 1)); //  'number'
console.log(typeOfSum(null, 1)); //  'number'
