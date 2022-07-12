// The goal of this exercise is to convert a string to a new string where each character in the new string
// is "(" if that character appears only once in the original string, or ")"
// if that character appears more than once in the original string.
// Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  let obj = {};
  let char = word.toLowerCase().split("");
  for (let i = 0; i < char.length; i++) {
    let elem = char[i];
    if (obj[elem] === undefined) {
      obj[elem] = 1;
    } else {
      obj[elem] += 1;
    }
  }
  return char.map(function (char) {
    return obj[char] === 1 ? "(" : ")";
  }).join('');
}

console.log(duplicateEncode("din")); // "((("
console.log(duplicateEncode("recede")); // "()()()"
