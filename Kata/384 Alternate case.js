// Alternate case

/*
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. 
E.g: Hello World -> hELLO wORLD
*/

function alternateCase(s) {
  return [...s].map(el => el == el.toLowerCase() ? el.toUpperCase() : el.toLowerCase()).join("")
}

console.log(alternateCase("abc")); // "ABC"
console.log(alternateCase("Hello World")); // "hELLO wORLD"




const alternateCase = s =>
  s.replace(/\w/g, val => val[`to${val < `a` ? `Low` : `Upp`}erCase`]());


function alternateCase(s) {
  return s.replace(/([a-z])|[A-Z]/g,(a,b)=>b?a.toUpperCase():a.toLowerCase());
}
