// Sum The Strings

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum
// (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

function sumStr(a, b) {
  return String((+a) + (+b))
}

console.log(sumStr("4", "5")); // "9"
console.log(sumStr("34", "5")); // "39"

sumStr = (a,b) => String(+a + +b);


function sumStr(a,b) {
  return (+a + +b)+''  
}



function sumStr(a, b) {
  return ((parseInt(a) || 0) + (parseInt(b) || 0)).toString();
}
