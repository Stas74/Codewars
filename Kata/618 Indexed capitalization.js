// Indexed capitalization

/*
Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.
*/

function capitalize(s, arr) {
  return s.split("").map((el, index) => arr.includes(index) ? el.toUpperCase() : el).join("");
}

console.log(capitalize("abcdef", [1, 2, 5])); // "aBCdeF"
console.log(capitalize("codewars", [1, 3, 5, 50])); // "cOdEwArs"
