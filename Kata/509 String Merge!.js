// String Merge!

/*
Given two words and a letter, return a single word that's a combination of both words, 
merged at the point where the given letter first appears in each word. 
The returned word should have the beginning of the first word and the ending of the second, 
with the dividing letter in the middle. You can assume both words will contain the dividing letter.

Examples
("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"
*/

function stringMerge(string1, string2, letter) {
  return string1.slice(0, string1.indexOf(letter)) + string2.slice(string2.indexOf(letter));
}

console.log(stringMerge("person","here", "e")); //  "pere"
console.log(stringMerge("apowiejfoiajsf","iwahfeijouh", "j")); //  "apowiejouh"
console.log(stringMerge("abcdefxxxyzz","abcxxxyyyxyzz", "x")); //  "abcdefxxxyyyxyzz"



const stringMerge = (string1, string2, letter) =>
  `${string1.split(letter, 1)}${string2.slice(string2.indexOf(letter))}`;



const stringMerge = (str1, str2, symb) => str1.match(`[^${symb}]*`) + str2.match(`${symb}.*`)
