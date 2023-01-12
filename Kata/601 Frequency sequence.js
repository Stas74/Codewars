// Frequency sequence

/*
Your task is to return an output string that translates an input string s by replacing each character in s 
with a number representing the number of times that character occurs in s 
and separating each number with the sep character(s).

Example (s, sep --> Output)

"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
"19999999"   , ":" --> "1:7:7:7:7:7:7:7"
"^^^**$"     , "x" --> "3x3x3x2x2x1"  
*/

function freqSeq(str, sep) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] ? obj[str[i]] += 1 : obj[str[i]] = 1;
  }
  return str.split("").map(el => obj[el]).join(sep);
}

console.log(freqSeq('hello world', '-')); // '1-1-3-3-2-1-1-2-1-3-1'
console.log(freqSeq('19999999',    ':')); // '1:7:7:7:7:7:7:7'



function freqSeq(str, sep) {
  return str.split('').map((v, i, arr) => arr.filter(vi => vi === v).length).join(sep);
}



function freqSeq(str, sep) {
  let letters = str.split("");
  var count = letters.reduce(function(acc, l) {
    acc[l] = acc[l] ? acc[l] + 1 : 1;
    return acc;
  }, {});
  return letters.map(l => count[l]).join(sep);
}



const freqSeq = (s, sep) => s.split("").map(i => s.split(i).length - 1).join(sep)



const freqSeq = (str, sep) =>
  [...str].map(val => --str.split(val).length).join(sep);
