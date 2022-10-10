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





// turn vowels into numbers
function encode(string){
  return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function decode(string){
  return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}



const table = ['a', 'e', 'i', 'o', 'u']
const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')





const obj = {a: 1, e: 2, i: 3, o: 4, u: 5};

const encode = string =>
  string.replace(/[aeiou]/g, val => obj[val]);

const decode = string =>
  string.replace(/[1-5]/g, val => Object.keys(obj)[--val]);
