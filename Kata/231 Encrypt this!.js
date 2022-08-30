// Encrypt this!

/*
You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

1. Your message is a string containing space separated words.
2. You need to encrypt each word in the message using the following rules:
    - The first letter must be converted to its ASCII code.
    - The second letter must be switched with the last letter
3. Keepin' it simple: There are no special characters in the input.

Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

var encryptThis = function(text) {
  return text.split(' ').map( el => el.length === 1 ? el.charCodeAt(0)+'' :
    el.length === 2 ? el.charCodeAt(0)+'' + el.slice(-1) :
    el.charCodeAt(0) + el.slice(-1) + el.slice(2, -1) + el.slice(1, 2)).join(' ');
}

// console.log(text.charCodeAt(0))
// console.log(text.slice(1, 2)) // first
// console.log(text.slice(2, -1)) // middle
// console.log(text.slice(-1)) // last

console.log(encryptThis("A")) // "65"
console.log(encryptThis("in")) // "105n"
console.log(encryptThis("Hello")) // "72olle"
console.log(encryptThis("hello world")) // "104olle 119drlo"
console.log(encryptThis("A wise old owl lived in an oak")) // '65 119esi 111dl 111lw 108dvei 105n 97n 111ka'
