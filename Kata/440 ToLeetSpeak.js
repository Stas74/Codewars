// ToLeetSpeak

/*
Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.

More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet

Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

For example:

toLeetSpeak("LEET") returns "1337"
In this kata we use a simple LeetSpeak dialect. Use this alphabet:

*/
const dict = {
  A: "@",
  B: "8",
  C: "(",
  D: "D",
  E: "3",
  F: "F",
  G: "6",
  H: "#",
  I: "!",
  J: "J",
  K: "K",
  L: "1",
  M: "M",
  N: "N",
  O: "0",
  P: "P",
  Q: "Q",
  R: "R",
  S: "$",
  T: "7",
  U: "U",
  V: "V",
  W: "W",
  X: "X",
  Y: "Y",
  Z: "2",
};

function toLeetSpeak(str) {
  return str.split(" ").map(word => word.split("").map(el => dict[el]).join("")).join(" ");
}

console.log(toLeetSpeak("LEET")); // "1337"
console.log(toLeetSpeak("CODEWARS")); // "(0D3W@R$"
console.log(toLeetSpeak("HELLO WORLD")); // "#3110 W0R1D"




const toLeetSpeak = s => s.replace(/[ABCEGHILOSTZ]/g, c => D[c]);
const D = {
  A: '@', B: '8', C: '(', E: '3',
  G: '6', H: '#', I: '!', L: '1',
  O: '0', S: '$', T: '7', Z: '2'
};



var translation = { A : '@',  B : '8',  C : '(',  E : '3', G : '6', H : '#',  I : '!',  L : '1',  O : '0',  S : '$',  T : '7',  Z : '2'
}
function toLeetSpeak(str) {
  return str.split('').map( c => translation[c] || c).join('');
}
