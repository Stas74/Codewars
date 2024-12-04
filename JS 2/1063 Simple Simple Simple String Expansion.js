// Simple Simple Simple String Expansion

/*
Given a string that includes alphanumeric characters ("3a4B2d") return the expansion of that string: 
The numeric values represent the occurrence of each letter preceding that numeric value. 
There should be no numeric characters in the final string.

Notes
- The first occurrence of a numeric value should be the number of times each character behind it is repeated, 
  until the next numeric value appears

- If there are multiple consecutive numeric characters, only the last one should be used (ignore the previous ones)
- Empty strings should return an empty string.

Your code should be able to work for both lower and capital case letters.

"3D2a5d2f"  -->  "DDDaadddddff"    # basic example: 3 * "D" + 2 * "a" + 5 * "d" + 2 * "f"
"3abc"      -->  "aaabbbccc"       # not "aaabc", nor "abcabcabc"; 3 * "a" + 3 * "b" + 3 * "c"
"3d332f2a"  -->  "dddffaa"         # multiple consecutive digits: 3 * "d" + 2 * "f" + 2 * "a"
"abcde"     -->  "abcde"           # no digits
"1111"      -->  ""                # no characters to repeat
""          -->  ""                # empty string
*/

function stringExpansion(s) {
  let noDuplicatesStr = s.replace(/\d{2}/g, "");
  let finStr = "";
  if (noDuplicatesStr.match(/\d/g) == null) {
    return s;
  }
  let i = 0;
  while (i < noDuplicatesStr.length) {
    if (typeof noDuplicatesStr[i] == "number") {
      let num = noDuplicatesStr[i];
    } else {
      finStr += noDuplicatesStr[i];
      i++;
    }
  }

  return 123;
}

console.log(stringExpansion("3abc")); // 'aaabbbccc'
console.log(stringExpansion("3D2a5d2f")); // 'DDDaadddddff'
console.log(stringExpansion("0d0a0v0t0y")); // ''
console.log(stringExpansion("3d332f2a")); // 'dddffaa'
console.log(stringExpansion("abcde")); // 'abcde'
console.log(stringExpansion("a2bcde")); // 'abbccddee'
