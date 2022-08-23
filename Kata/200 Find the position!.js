// Find the position!

/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

function position(letter){
  return `Position of alphabet: ${letter.charCodeAt() - 96}`;
}

console.log(position("a")); // "Position of alphabet: 1"
console.log(position("z")); // "Position of alphabet: 26"
