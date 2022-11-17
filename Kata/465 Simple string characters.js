// Simple string characters

/*
In this Kata, you will be given a string and your task will be to return a list of ints 
detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
*/

function solve(s) {
  let upper = (s.match(/[A-Z]/g) || []).length;
  let lower = (s.match(/[a-z]/g) || []).length;
  let numbers = (s.match(/[0-9]/g) || []).length;
  let special = s.length - upper - lower - numbers

  return [upper, lower, numbers, special];
}

console.log(solve("aAbBcC")); // [3,3,0,0]
console.log(solve("Codewars@codewars123.com")); // [1,18,3,2]
