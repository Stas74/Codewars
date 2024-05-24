// Is it a letter?

/*
This is the simple version of Shortest Code series. 

*/

function isItLetter(character) {
  return /[a-z]/i.test(character);
}

console.log(isItLetter("a")); // true
console.log(isItLetter("1")); // false
