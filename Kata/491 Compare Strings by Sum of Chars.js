// Compare Strings by Sum of Chars

/*
Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal
*/

function compare(s1, s2) {
  if (!/^[a-z]+$/i.test(s1) || s1 == null) {
    s1 = ""
  };
  if (!/^[a-z]+$/i.test(s2) || s2 == null) {
    s2 = ""
  };
  let totalS1 = s1.toUpperCase().split("").reduce((prev, cur) => prev + cur.charCodeAt(0), 0);
  let totalS2 = s2.toUpperCase().split("").reduce((prev, cur) => prev + cur.charCodeAt(0), 0);
  return totalS1 == totalS2;
}

console.log(compare("AD", "BC")); //  true
console.log(compare("AD", "DD")); //  false
console.log(compare("ZzZz", "ffPFF")); //  true



function compare(s1, s2) {
  function sum(s) {
    let a = (s||'').toUpperCase().split('');
    return a.every( (v) => /[A-Z]/.test(v) ) ? a.reduce( (r, v) => r + v.codePointAt(0),0) : 0;
  }
  return sum(s1) === sum(s2);
}



function compare(s1, s2) {
  let sum1 = 0;
  let sum2 = 0;

  if (!s1 || s1.search(/[^a-zA-Z]+/) !== -1) s1 = '';
  if (!s2 || s2.search(/[^a-zA-Z]+/) !== -1) s2 = '';

  s1.toUpperCase().split('').map((item) => sum1 += item.charCodeAt(0));
  s2.toUpperCase().split('').map((item) => sum2 += item.charCodeAt(0));

  return sum1 === sum2;
}



function compare(s1, s2) {
  if (/^\D+$/gi.test(s1) && /^\D+$/gi.test(s2))
    return s1.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b) === 
           s2.split('').map(n => n.toUpperCase().charCodeAt()).reduce((a, b) => a + b);
  return true;
}
