// Digits explosion

/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples

explode("312")
should return :
"333122"

explode("102269")
should return :
"12222666666999999999"
*/

function explode(s) {
  return s.split("").map(el => el = el.repeat(+el)).join("")
}

console.log(explode("312")); // "333122"
console.log(explode("123")); // "122333"
console.log(explode("00")); // ""




const explode = s => s.replace(/\d/g, d => d.repeat(d));



explode = (s) => [...s].map((n) => n.repeat(n)).join``;
