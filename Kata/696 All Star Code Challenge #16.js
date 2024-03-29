// All Star Code Challenge #16

/*
Create a function called noRepeat() that takes a string argument and returns a single letter string 
of the first not repeated character in the entire string.

noRepeat("aabbccdde") // => "e"
noRepeat("wxyz") // => "w"
noRepeat("testing") // => "e"

Note: ONLY letters from the english alphabet will be used as input 
There will ALWAYS be at least one non-repeating letter in the input string
*/

function noRepeat(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
}

console.log(noRepeat("aabbccdde")); // "e"
console.log(noRepeat("wxyz")); // "w"
console.log(noRepeat("testing")); // "e"


function noRepeat(str) {
  for (let i of str) {
    if (str.split(i).length == 2) return i;
  }
}


function noRepeat(str) {
  return str
    .split("")
    .filter((x, i) => str.indexOf(x) === str.lastIndexOf(x))[0];
}


function noRepeat(str) {  
  return [...str].find((char, i, arr) =>
    arr.indexOf(char) === arr.lastIndexOf(char)
  );
}


