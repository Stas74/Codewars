// Composing squared strings

/*

A squared string is a string of n lines, each substring being n characters long. 
We are given two n-squared strings. For example:

s1 = "abcd\nefgh\nijkl\nmnop" s2 = "qrst\nuvwx\nyz12\n3456"

Let us build a new string strng of size (n + 1) x n in the following way:

The first line of strng has the first char of the first line of s1 plus the chars of the last line of s2.
The second line of strng has the first two chars of the second line of s1 plus the chars of the penultimate line 
of s2 except the last char
and so on until the nth line of strng has the n chars of the nth line of s1 plus the first char of the first line of s2.
Calling this function compose(s1, s2) we have:

compose(s1, s2) -> "a3456\nefyz1\nijkuv\nmnopq"
or printed:
abcd    qrst  -->  a3456
efgh    uvwx       efyz1
ijkl    yz12       ijkuv
mnop    3456       mnopq

*/

function compose(s1, s2) {
  let arr1 = s1.split("\n");
  let arr2 = s2.split("\n").reverse();
  return arr1
    .map((el, i) => el.slice(0, i + 1) + arr2[i].slice(0, arr2[i].length - i))
    .join("\n");
}

// arr1.map((el,i) => el.slice(0, i + 1))
// arr2.map((el, i) => el.slice(0, el.length - i))

console.log(compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB")); // "bNkTB\nhTrWO\nRTFVi\nCnnIj"




const compose = (s1, s2) => {
  s1 = s1.split("\n");
  s2 = s2.split("\n");
 
  const s = s1.map((s1, i) => s1.substr(0, i + 1) + s2[s2.length - i - 1].substr(0, s2.length - i))
 
  return s.join("\n");
}



compose = (s1, s2, idx = 0) =>
  s1.replace(/\S+/g, val => val.slice(0, idx + 1) + s2.split(`\n`).reverse()[idx].slice(0, val.length - idx++));



compose = (a, b, c = a.split`\n`, d = b.split`\n`.reverse()) =>
  c.map((e, i) => e.slice(0, i + 1) + d[i].slice(0, e.length - i)).join`\n`;



// destructuring

{const {transpose} = require('ramda')
var compose = (s1, s2) =>
  transpose([s1.split`\n`, s2.split`\n`.reverse``])
    .map(([a, b], ind) => a.slice(0, ind + 1) + b.slice(0, -ind || b.b))
    .join`\n`
}



