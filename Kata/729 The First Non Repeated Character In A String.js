// The First Non Repeated Character In A String

/*
You need to write a function, that returns the first non-repeated character in the given string.

If all the characters are unique, return the first character of the string.
If there is no unique character, return null in JS or Java, None in Python, '\0' in C.

You can assume, that the input string has always non-zero length.

Examples
"test"   returns "e"
"teeter" returns "r"
"trend"  returns "t" (all the characters are unique)
"aabbcc" returns null (all the characters are repeated)
*/

function firstNonRepeated(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) == s.lastIndexOf(s[i])) {
      return s[i];
    }
  }
  return null;
}

console.log(firstNonRepeated("test")); // "e"
console.log(firstNonRepeated("1122321235121222")); // "5"
console.log(firstNonRepeated("rend")); // "r"



const firstNonRepeated = s => [...s].find(i => s.indexOf(i) == s.lastIndexOf(i)) || null



function firstNonRepeated(s) {
  return s.split('').find(c => s.indexOf(c) == s.lastIndexOf(c)) || null;
}


