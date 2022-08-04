// Double Char

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "



function doubleChar(str) {
  let finStr = "";
  for (let char of str) {
    finStr += char + char
  }
  return finStr
}

console.log(doubleChar("abcd")) // "aabbccdd"



const doubleChar = (str) => str.split("").map(c => c + c).join("");



function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}
