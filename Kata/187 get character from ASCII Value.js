// get character from ASCII Value

/*
Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:

get_char(65)

should return:
'A'
*/


function getChar(c){
  return String.fromCharCode(c)
}

console.log(getChar(55))  // 7
console.log(getChar(65))  // A



const getChar = String.fromCharCode;

getChar = c => String.fromCharCode(c);
