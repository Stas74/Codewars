// String to integer conversion

/*

JavaScript provides a built-in parseInt method.

It can be used like this:

parseInt("10") returns 10
parseInt("10 apples") also returns 10
We would like it to return "NaN" (as a string) for the second case because the input string is not a valid number.

You are asked to write a myParseInt method with the following rules:

It should make the conversion if the given string only contains a single integer value 
(and possibly spaces - including tabs, line feeds... - at both ends)
For all other strings (including the ones representing float values), it should return NaN
It should assume that all numbers are not signed and written in base 10

*/

function myParseInt(str) {
  return str.trim().match(/[\D]/) ? NaN : parseInt(str);
}

// return /[\D]/g.test(str.replace(/[ ]/g, "")) ? NaN : parseInt(str);

console.log(myParseInt("1")); // 1
console.log(myParseInt("  1 ")); // 1
console.log(myParseInt("08")); // 8
console.log(myParseInt("5 friends")); // NaN
console.log(myParseInt("5.8")); // NaN




function myParseInt(str) {
  return /^\s*\d+\s*$/.test(str) ? +str : NaN;
}


function myParseInt(str) {
  return /^\d+$/g.test(str.trim()) ? +str : NaN;
}


const myParseInt = s => /^\d+$/.test(s.trim()) ? +s : 'NaN';


function myParseInt(str) {
  return str.trim().match(/[^0-9]/g) === null ? parseInt(str) : 'NaN'
}


