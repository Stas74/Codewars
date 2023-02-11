// Permute a Palindrome

/*
Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. 
Bonus points for a solution that is efficient and/or that uses only built-in language functions. 
Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

Example
madam -> True
adamm -> True
junk -> False

Hint
The brute force approach would be to generate all the permutations of the string and check each one of them 
whether it is a palindrome. However, an optimized approach will not require this at all.
*/

function permuteAPalindrome(input) {
  const obj = {};
  for (const char of input) {
    obj[char] ? (obj[char] += 1) : (obj[char] = 1);
  }
  let valuesArr = Object.values(obj);
  if (input.length % 2 == 0) {
    return valuesArr.every((val) => val % 2 == 0);
  } else {
    return valuesArr.filter((el) => el % 2 !== 0).length != 1 ? false : true;
  }
}

console.log(permuteAPalindrome("aa")); // true
console.log(permuteAPalindrome("aab")); // true
console.log(permuteAPalindrome("baabcd")); // false
console.log(permuteAPalindrome("baabced")); // false
