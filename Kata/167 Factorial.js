// Factorial

/*
In mathematics, the factorial of a non-negative integer n, denoted by n!, 
is the product of all positive integers less than or equal to n. 
For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. 
If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) 
or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) 
or ValueError (Python) or return -1 (C).

More details about factorial can be found here.
*/

function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError("The argument must be between 0 and 12.")
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let total = 1;
  while (n > 0) {
    total *= n;
    n--;
  }
  return total
}


console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(3)) // 6
console.log(factorial(-1)) // Error




function factorial(n) {
  if (n < 0 || n > 12)
    throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}


function factorial(n){

 if (n < 0 || n > 12) {
    throw new RangeError('Parameter must be between ' + 0 + ' and ' + 12);
  }
return n<2 ? 1 : n*factorial(n-1);
}
