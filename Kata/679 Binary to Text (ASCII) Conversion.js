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



function binaryToString(binary) {
  return binary.replace(/[01]{8}/g, function(v){ 
    return String.fromCharCode(parseInt(v, 2)); 
  });
}



function binaryToString(binary) {
  return binary.replace(/[01]{8}/g, n => String.fromCharCode(parseInt(n, 2)))
}



const binaryToString = binary =>
  binary.replace(/[01]{8}/g, val => String.fromCharCode(`0b${val}`));



function binaryToString(binary) {
  let arr = [];
	if (binary.length){
  	for (let i = 0; i < binary.length; i += 8) {
    	arr.push(binary.substr(i, 8));
    }
  	return arr.map(s => String.fromCharCode(parseInt(s, 2))).join('');
  }
  return '';
}



const binaryToString = binary => binary.replace(/\d{8}/g, chunk => String.fromCharCode('0b' + chunk));
