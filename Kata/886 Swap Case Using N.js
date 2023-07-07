// Swap Case Using N

/*
Your job is to change the given string s using a non-negative integer n.

Each bit in n will specify whether or not to swap the case for each alphabetic character in s: 
if the bit is 1, swap the case; if its 0, leave it as is. 
When you finish with the last bit of n, start again with the first bit.

You should skip the checking of bits when a non-alphabetic character is encountered, 
but they should be preserved in their original positions.

Examples

swap("Hello world!", 11)  -->  "heLLO wORLd!"
...because 11 is 1011 in binary, so the 1st, 3rd, 4th, 5th, 7th, 8th and 9th alphabetical characters have to be swapped:

H e l l o   w o r l d !
1 0 1 1 1 x 0 1 1 1 0 x
^   ^ ^ ^    ^ ^ ^

More examples

swap("gOOd MOrniNg", 7864)        -->  "GooD MorNIng"
swap("", 11345)                   -->  ""
swap("the lord of the rings", 0)  -->  "the lord of the rings"

*/

const swapTheCase = (char) =>
  char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();

const swap = (str, n) => {
  n = n.toString(2);
  let [i, j] = [0, 0];
  let res = '';
  //two pointers to iterate over str and binary representation of "n"
  while (i < str.length) {
    //construct our result string
    n[j] === '1' ? (res += swapTheCase(str[i])) : (res += str[i]);

    //increment pointer in binary representation, only if we have a valid letter in str
    if (str[i].replace(/[^a-zA-Z]+/g, '')) j++;

    i++;
    //if we reached the end of binary representation, start over
    if (j === n.length) j = 0;
  }

  return res;
};

console.log(swap('Hello world!', 11)); // "heLLO wORLd!"




// Swap Case Using N

/*
Your job is to change the given string s using a non-negative integer n.

Each bit in n will specify whether or not to swap the case for each alphabetic character in s: 
if the bit is 1, swap the case; if its 0, leave it as is. 
When you finish with the last bit of n, start again with the first bit.

You should skip the checking of bits when a non-alphabetic character is encountered, 
but they should be preserved in their original positions.

Examples

swap("Hello world!", 11)  -->  "heLLO wORLd!"
...because 11 is 1011 in binary, so the 1st, 3rd, 4th, 5th, 7th, 8th and 9th alphabetical characters have to be swapped:

H e l l o   w o r l d !
1 0 1 1 1 x 0 1 1 1 0 x
^   ^ ^ ^    ^ ^ ^

More examples

swap("gOOd MOrniNg", 7864)        -->  "GooD MorNIng"
swap("", 11345)                   -->  ""
swap("the lord of the rings", 0)  -->  "the lord of the rings"

*/

const swapTheCase = (char) =>
  char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();

const swap = (str, n) => {
  n = n.toString(2);
  let [i, j] = [0, 0];
  let res = '';
  //two pointers to iterate over str and binary representation of "n"
  while (i < str.length) {
    //construct our result string
    n[j] === '1' ? (res += swapTheCase(str[i])) : (res += str[i]);

    //increment pointer in binary representation, only if we have a valid letter in str
    if (str[i].replace(/[^a-zA-Z]+/g, '')) j++;

    i++;
    //if we reached the end of binary representation, start over
    if (j === n.length) j = 0;
  }

  return res;
};

console.log(swap('Hello world!', 11)); // "heLLO wORLd!"




function swapcase(str){
  return /[a-z]/.test(str) ? str.toUpperCase() : str.toLowerCase()
}

function swap(s, n){
  n = n.toString(2)
  n = n.padEnd((s.match(/[a-z]/ig) || []).length, n).split``
  return [...s].map(x => /[a-z]/i.test(x) ? (n.shift() == "1" ? swapcase(x) : x) : x).join``
}



function swap (string, positiveInteger) {
  const bits = Number(positiveInteger).toString(2)
  let index = 0
  
  return string.replace(/[a-z]/gi, letter => {
    if (index >= bits.length) index = 0
    if (bits[index++] === '0') return letter
    
    return letter > "Z"
      ? letter.toUpperCase()
      : letter.toLowerCase()
  })
}



const isUpperCase = str => str === str.toLocaleUpperCase()
const isLetter = (str) => /[a-zA-Z]/.test(str);

const swap = (s, n) => {
  if (s == '' || n == 0) return s;
  const binary = n.toString(2);
  const letters = s.split('');
  const test = binary.repeat((s.length / binary.length + 1) | 0);
  let idx = 0;
  return letters
    .map((ltr) => {
      if (!isLetter(ltr)) {
        return ltr;
      }
      if (test[idx] == '1') {
        idx++;
        return isUpperCase(ltr)
          ? ltr.toLocaleLowerCase()
          : ltr.toLocaleUpperCase();
      }
      idx++;
      return ltr;
    })
    .join('');
};




// recursion & logical multiplication
const swap = ([ch, ...str], n, mask = n.toString`2`, ind = 0) => (
  ind *= ind < mask.length,
  ch ? (+mask[ind] ? ch[`to${ch>'Z' ?'Upp' :'Low'}erCase`]`` : ch) + swap(str, n, mask, ind + /\w/.test(ch)) : ''
)



function swap(s, n){
  n=[...n.toString(2).repeat(100)].reverse``;
  return [...s].map(s=> /[a-z]/i.test(s) && n.pop``-0 ? String.fromCharCode(s.charCodeAt``^32) : s).join``;
}
