// No ifs no buts

/*

Write a function that accepts two numbers a and b and returns whether a is smaller than, 
bigger than, or equal to b, as a string.

(5, 4)   ---> "5 is greater than 4"
(-4, -7) ---> "-4 is greater than -7"
(2, 2)   ---> "2 is equal to 2"
There is only one problem...

You cannot use if statements, and you cannot use the ternary operator ? :.

In fact the word if and the character ? are not allowed in your code

*/

function noIfsNoButs(a, b) {
  switch (Math.sign(a - b)) {
    case 1:
      return `${a} is greater than ${b}`;
    case -1:
      return `${a} is smaller than ${b}`;
    case 0:
      return `${a} is equal to ${b}`;
  }
}

console.log(noIfsNoButs(45, 51)); // "45 is smaller than 51"
console.log(noIfsNoButs(100, 80)); // "100 is greater than 80"
console.log(noIfsNoButs(100, 100)); // "100 is equal to 100"




var noIfsNoButs = function (a,b) {
  switch (true) {
    case (a <   b) : return a + " is smaller than " + b;
    case (a >   b) : return a + " is greater than " + b;
    default        : return a + " is equal to "     + b;
  }
}



const noIfsNoButs = (a, b) =>
  a < b && `${a} is smaller than ${b}` ||
  a > b && `${a} is greater than ${b}` ||
  `${a} is equal to ${b}`



const noIfsNoButs = (a, b) =>
  `${a} is ${[`smaller than`, `equal to`, `greater than`][Math.sign(a - b) + 1]} ${b}`;


