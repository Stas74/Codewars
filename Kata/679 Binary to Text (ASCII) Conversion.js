// Binary to Text (ASCII) Conversion

/*
Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

Each 8 bits on the binary string represent 1 character on the ASCII table.

The input string will always be a valid binary string.

Characters can be in the range from "00000000" to "11111111" (inclusive)

Note: In the case of an empty binary string your function should return an empty string.
*/

function binaryToString(binary) {
  const binArr = binary.match(/.{1,8}/g);
  return binArr ? binArr.map(el => String.fromCharCode(parseInt(el, 2))).join("") : "";
}

// let binArr = binary.match(new RegExp(".{1," + 8 + "}", "g"));
console.log(binaryToString("01100001")); // 'a'
console.log(binaryToString("01001011010101000100100001011000010000100101100101000101")); // 'KTHXBYE'
