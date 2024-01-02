// Lottery machine

/*
Your task is to write an update for a lottery machine. 
Its current version produces a sequence of random letters and integers (passed as a string to the function). 
Your code must filter out all letters and return unique integers as a string, in their order of first appearance. 
If there are no integers in the string return "One more run!"

Examples:

"hPrBKWDH8yc6Lt5NQZWQ"  -->  "865"
"ynMAisVpHEqpqHBqTrwH"  -->  "One more run!"
"555"                   -->  "5"

*/

function lottery(str) {
  return str.replace(/[a-z]/gi, "").length == 0
    ? "One more run!"
    : [...new Set(str.replace(/[a-z]/gi, ""))].join("");
}

console.log(lottery("wQ8Hy0y5m5oshQPeRCkG")); // "805"
console.log(lottery("ffaQtaRFKeGIIBIcSJtg")); // "One more run!"




function lottery(str){
   res = str.replace(/[a-zA-Z]/g,'')
     .split('')
     .filter((x,n,s) => s.indexOf(x) == n)
     .join('');
   return res ? res : 'One more run!'
}



const lottery = str => [...new Set(str.match(/\d/g)).values()].join('') || 'One more run!';



function lottery(str){
  return [...new Set(str.replace( /\D/g, '' ))].join('') || "One more run!"
}



const lottery = str =>
  [...new Set(str.replace(/\D/g, ``))].join(``) || `One more run!`;



lottery = s => (s.match(/\d/g)||[]).reduce((a,n)=>a.indexOf(n)<0?[...a,n]:a,[]).join``||'One more run!'



function lottery(str){
  const chars = str.split("");
  const digitsFiltered = chars.filter(char => char >= 0)
  const removedDuplicatedDigits = [...new Set(digitsFiltered)].join("")
  
  return removedDuplicatedDigits.length > 0 ? removedDuplicatedDigits : "One more run!"
}



function lottery(str) {
  let a = str
    .split("")
    .map((x) => +x)
    .filter((x) => x >= 0);

  if (typeof a[0] === "number") {
    return [...new Set(a)].join("");
  } else return "One more run!";
}
