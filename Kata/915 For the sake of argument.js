 // For the sake of argument

/*
Write a function named numbers.

function should return True if all parameters are of the Number type.

The function should accept any number of parameters.

Example usage:

numbers(1, 4, 3, 2, 5); // true
numbers(1, "a", 3); // false
numbers(1, 3, NaN); // true
*/

function numbers(val) {
  return Object.values(arguments).every(el => typeof el == 'number');
}

console.log(numbers(1, 4, 3, 2, 5)); // true
console.log(numbers(1, "a", 3)); // false
console.log(numbers(1, 3, NaN)); // true
