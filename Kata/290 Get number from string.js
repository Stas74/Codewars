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



function getNumberFromString(s) {
  return Number(s.replace(/\D/g, ""));
}



function getNumberFromString(s) {
  return Number(s.split('').filter(a => a <= '9' && a >= '0').join(''))
}



const getNumberFromString = (s) => parseInt(s.split("").filter(x => "0123456789".includes(x)).join(""))
