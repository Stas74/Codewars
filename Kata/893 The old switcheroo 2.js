// The old switcheroo 2

/*
This is a follow up from my kata The old switcheroo

Write the function :

function encode(str)
that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819'
encode('abc-#@5') == '123-#@5'
String are case sensitive.

// Bonus point if you don't use toLowerCase()
*/

function encode(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return str
    .split("")
    .map((el) =>
      alphabet.indexOf(el) == -1
        ? el
        : alphabet.indexOf(el) > 25
        ? alphabet.indexOf(el) - 25
        : alphabet.indexOf(el) + 1
    )
    .join("");
}

console.log(encode("abc")); // '123'
console.log(encode("ABCD")); // '1234'
console.log(encode("ZzzzZ")); // '2626262626'
console.log(encode("abc-#@5")); // '123-#@5'




const encode = str => {
  return str.replace(/[a-z]/gi, l => {
    let cc = l.charCodeAt(0);
    return cc - (cc < 97 ? 64 : 96);
  });
}


function encode(str) {
  return str.replace(/[a-z]/gi, c => c.charCodeAt() - (c < "a" ? 64 : 96))
}


const encode = str => str.toLowerCase().replace(/[a-z]/g, $ => $.codePointAt()-96)



const encode = str =>
  str.replace(/[A-Z]/gi, val => val.charCodeAt() & 31);



function encode(str) {
  var letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return str.split('').map(x => {let index = letters.indexOf(x.toLowerCase());return index == -1 ? x : index+1}).join('')
}



let encode = s => s.toLowerCase().split('').map(el => (el.codePointAt() < 123 && el.codePointAt() > 96) ? el.codePointAt() - 96 : el).join('');



const encode = str => str.replace(/[a-z]/gi,(_,i) => 'abcdefghijklmnopqrstuvwxyz'.indexOf(_.toLowerCase())+1);
