// Write a function that accepts an integer n and a string s as parameters, 
// and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
  let result ='';
  while (n > 0) {
    result += s;
    n--;
  }
  return result;
}

console.log(repeatStr(3, "*")); // "***"

console.log(repeatStr(5, "#")); // "#####"

console.log(repeatStr(2, "ha ")); // "ha ha "
