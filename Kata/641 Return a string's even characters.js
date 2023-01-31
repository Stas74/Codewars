// Return a string's even characters

/*
Write a function that returns a sequence (index begins with 1) of all the even characters from a string. 
If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"
*/

function evenChars(string) {
  return string.length < 2 || string.length > 100 ? "invalid string" : 
  string.split("").filter((el, idx) => {if (idx % 2 !== 0) {return el}})
}

console.log(evenChars("1234")); // ["2", "4"]
console.log(evenChars("a")); // "invalid string"
console.log(evenChars("abcdefghijklm")); // ["b", "d", "f", "h", "j", "l"]




function evenChars(string) {
  return (string.length < 2 || string.length > 100) ? "invalid string" : 
  [...string].filter((x, i) => i % 2);
}


const evenChars = (str) => 1 < str.length && str.length < 100
  ? Array.from(str).filter((_, i) => i & 1)
  : "invalid string"



