// Consecutive letters

/*
In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet 
and if each letter occurs only once.

Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

For example: 
solve("abc") = True, because it contains a,b,c
solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
solve("dabc") = True, because it contains a, b, c, d
solve("abbc") = False, because b does not occur once.
solve("v") = True
All inputs will be lowercase letters.
*/

function solve(s) {
  return Boolean(s.split("").sort().map(el => el.charCodeAt()).reduce((output, last) => (output ?
    (output + 1 == last ? last : false)
  : false)));
}


console.log(solve("abc"));  // true
console.log(solve("dabc"));  // true
console.log(solve("abd"));  // false
console.log(solve("abbc"));  // false
