// Anagram Detection

/*
An anagram is the result of rearranging the letters of a word to produce a new word.

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/


var isAnagram = function(test, original) {
  if (test.length !== original.length) {
    return false
  }
  let testArr = test.toLowerCase().split('').sort()
  let originalArr = original.toLowerCase().split('').sort()
  for (let i = 0; i < testArr.length; i++) {
    if (testArr[i] !== originalArr[i]) {
      return false
    }    
  }
  return true
};

console.log(isAnagram("foefet", "toffee"))  // true
console.log(isAnagram("Buckethead", "DeathCubeK"))  // true
console.log(isAnagram("apple", "pale"))  // false





var isAnagram = function(test, original) {
  var t = test.toLowerCase().split('').sort().join('');
  var o = original.toLowerCase().split('').sort().join('');
  return (t==o)?true:false;
};



function isAnagram (test, original) {
  return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
}
