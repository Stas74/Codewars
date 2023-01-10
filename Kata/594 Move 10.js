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
