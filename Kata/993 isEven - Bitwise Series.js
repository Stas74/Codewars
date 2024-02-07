// isEven? - Bitwise Series

/*
Is the number even?
If the numbers is even return true. If it's odd, return false.

Oh yeah... the following symbols/commands have been disabled!

use of %
use of .even? in Ruby
use of mod in Python
*/

var isEven = function (n) {
  //if n is even return true, otherwise, return false
  return Number.isInteger(n / 2);
};

console.log(isEven(2)); // true
console.log(isEven(3)); // false


// When you perform the & binary operation on 1, you get the least significant binary digit of the number. If that number is even, the digit will be zero, otherwise it will be one.
var isEven = function (n) { //if n is even return true, otherwise, return false
  return (n & 1) == 0
}


function isEven(n) {
	return !(n & 1);
}


let isEven = n=> (n & 1) ? false : true;




var isEven = function (n) { //if n is even return true, otherwise, return false
  return Math.floor(n / 2) * 2 === n ? true : false;
}



const isEven = (n) => (n | 1) != n;



