// They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it.
// This is a sadly story #1: Are they opposite?

/*
Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. 
Note: The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite. 
you can assume that the string only contains letters or it's a empty string. 
Also take note of the edge case - if both strings are empty then you should return false/False.

Examples (input -> output)
"ab","AB"     -> true
"aB","Ab"     -> true
"aBcd","AbCD" -> true
"AB","Ab"     -> false
"",""         -> false
*/

function isOpposite(s1, s2) {
  if (s1 == "" || s1.length != s2.length || s1.toLowerCase() != s2.toLowerCase()) {
    return false;
  }
  let flag = true;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] == s2[i]) {
      flag = false;
    }
  }
  return flag;
}

console.log(isOpposite("ab", "AB")); // true
console.log(isOpposite("aB", "Ab")); // true
console.log(isOpposite("aBcd", "AbCD")); // true
console.log(isOpposite("aBcde", "AbCD")); // false
console.log(isOpposite("AB", "Ab")); // false
console.log(isOpposite("", "")); // false
console.log(isOpposite("QWXYhhkTqO", "vwGqrQPowG")); // false
