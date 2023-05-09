// Alphabetically ordered

/*

Your task is very simple. 
Just write a function that takes an input string of lowercase letters and returns true/false 
depending on whether the string is in alphabetical order or not.

Examples (input -> output)
"kata" -> false ('a' comes after 'k')
"ant" -> true (all characters are in alphabetical order)

*/

function alphabetic(s) {
  return s === s.split("").sort().join("");
}

console.log(alphabetic("asd")); // false
console.log(alphabetic("codewars")); // false
console.log(alphabetic("door")); // true
console.log(alphabetic("cell")); // true



function alphabetic(s) {
  for (let i = 1; i < s.length; i++) {
    if (s[i] < s[i - 1]) {
      // If the current character is less than the previous character, the string is not in alphabetical order
      return false;
    }
  }
  // If we make it through the loop without finding a pair of characters that are out of order, the string is in alphabetical order
  return true;

}


function alphabetic(s) {
  // Yor code here
  let newStr = s.toLowerCase().split("")
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i - 1] > newStr[i]) {
        return false
    }
  }
  return true
}



function alphabetic(s) {
  return s === s.split("").sort((a, b) => a.localeCompare(b)).join("");
};



const alphabetic = (s) => s === [...s].sort().join('');
