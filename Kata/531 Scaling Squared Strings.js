// Scaling Squared Strings

/*
You are given a string of n lines, each substring being n characters long. For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study the "horizontal" and the "vertical" scaling of this square of strings.

A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').

Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"
A v-vertical scaling of a string consists of replicating v times each part of the squared string.

Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"
Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.

Example: a = "abcd\nefgh\nijkl\nmnop"
scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
Printed:

abcd   ----->   aabbccdd
efgh            aabbccdd
ijkl            aabbccdd
mnop            eeffgghh
                eeffgghh
                eeffgghh
                iijjkkll
                iijjkkll
                iijjkkll
                mmnnoopp
                mmnnoopp
                mmnnoopp
Task:
Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".
*/

function scale(strng, k, n) {
  return strng.split("\n").map(el => el.split('').map(char => char.repeat(k)).join(''))
  .map(v => (v+' ').repeat(n)).map(v => v.trim().replace(/ /g,'\n')).join('\n');
}

var a = "abcd\nefgh\nijkl\nmnop";
var r = "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp";

console.log(scale(a, 2, 3)); // r
console.log(scale("", 5, 5)); // ""
console.log(scale("Kj\nSH", 1, 2)); // "Kj\nKj\nSH\nSH"





const scale = (str, k, n) =>
  str
    .replace(/[^\n]/g,  c => Array(k + 1).join(c))
    .replace(/[^\n]+/g, c => Array(n + 1).join("\n" + c).slice(1));




const scale = (strng, k, n) => 
      strng.split('\n').map( el => Array(n)
                        .fill( [...el].map(e => e.repeat(k)).join('') )
                        .join('\n') )
                        .join('\n')
                        .trim()



const scale = (strng, k, n) =>
  strng.replace(/./g, `$&`.repeat(k)).replace(/.+/g, `$&\n`.repeat(n).trim());

