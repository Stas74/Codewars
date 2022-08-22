// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

/*
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/


function replace(s){  
  return s.replace(/[aeiouAEIOU]/g, '!')  
}

console.log(replace("Hi!"))  // "H!!"
console.log(replace("ABCDE"))  // "!BCD!"
