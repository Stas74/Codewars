// The Vowel Code

/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string 
with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

const dict = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

function encode(string) {
  return string.split("").map(char => dict[char] || char).join("");
}

function decode(string) {
  return string.split("").map(char => Object.keys(dict).find(key => dict[key] == char) || char).join("");
}


// console.log(dict["a"])
// function getKeyByValue(object, value) {
//   return Object.keys(object).find(key => object[key] === value);
// }

console.log(encode("hello")); // "h2ll4"
console.log(encode("How are you today?")); // 'H4w 1r2 y45 t4d1y?'
console.log(decode("h2ll4")); // "hello"
