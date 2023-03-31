// Move all vowels

/*
Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

Vowels are (in this kata): a, e, i, o, u

Note: all provided input strings are lowercase.

Examples
"day"    ==>  "dya"
"apple"  ==>  "pplae"
*/

function moveVowel(input) {
  return input.replace(/[aeiou]/g, "") + input.replace(/[^aeiou]/g, "");
}

console.log(moveVowel("apple")); // "pplae"
console.log(moveVowel("peace")); // "pceae"
