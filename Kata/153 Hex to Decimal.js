// Hex to Decimal

// Complete the function which converts hex number (given as a string) to a decimal number.

function hexToDec(hexString){
  return parseInt(hexString, 16)
}

console.log(hexToDec("1")); // 1
console.log(hexToDec("a")); // 10
console.log(hexToDec("10")); // 16
