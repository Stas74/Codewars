// Count consonants

/*
Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
*/

function consonantCount(str) {
  return str.replace(/[0-9aeiou_\s\W]/gi, "").length; //  \s -	One whitespace \W	- One non-word character
}

// /[aeiou0-9_\W]/gi, "")

console.log(consonantCount("XaeiouX")); // 2
console.log(consonantCount("helLo world")); // 7
console.log(consonantCount("012345_Cb")); // 2
console.log(consonantCount("h^$&^#$&^elLo world")); // 7
