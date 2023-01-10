// Move 10

/*
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/

function moveTen(s) {
  const arrStringPlusTen = s.split("").map(el => el.charCodeAt() + 10);
  const checkArrElementOver122 = arrStringPlusTen.map(e => e > 122 ? e - 26 : e);
  const finArr = checkArrElementOver122.map(el => String.fromCodePoint(el));
  return finArr.join("")
  // return s.split("").map(el => el.charCodeAt() + 10).map(e => e > 122 ? e - 26 : e).map(el => String.fromCodePoint(el)).join("")
}

// "z".charCodeAt();
// String.fromCodePoint(97)
// 97 -- 122

console.log(moveTen("testcase")); // "docdmkco"
console.log(moveTen("codewars")); // "mynogkbc"
console.log(moveTen("exampletesthere")); // "ohkwzvodocdrobov"




function moveTen(s){
  return s.split('').map(e => e.charCodeAt(0) + 10 > 122 
                                ? String.fromCharCode(e.charCodeAt(0) - 16) 
                                : String.fromCharCode(e.charCodeAt(0) + 10)).join('');
}



function moveTen(s) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let move10 = 'klmnopqrstuvwxyzabcdefghij';
  return s.replace(/[a-z]/g, x => move10[alphabet.indexOf(x)]);
}



const moveTen = s =>
  s.replace(/./g, val => String.fromCharCode(97 + (val.charCodeAt() - 87 ) % 26));



const moveTen = s => s.replace(/./g, c => 'klmnopqrstuvwxyzabcdefghij'[c.charCodeAt(0)-97]);
