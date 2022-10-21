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
