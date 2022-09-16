// Get number from string

/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56
*/

function getNumberFromString(s) {
  return +s.replace(/[^0-9]/g, '')
}

console.log(getNumberFromString("1"))  // 1
console.log(getNumberFromString("123"))  // 123
console.log(getNumberFromString("this is number: 7"))  // 7
