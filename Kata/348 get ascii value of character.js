// get ascii value of character

/*
Get ASCII value of a character.

For the ASCII table you can refer to http://www.asciitable.com/
*/

function getASCII(c){
  return c.charCodeAt()
}


console.log(getASCII('A')) // 65
console.log(getASCII(' ')) // 32
console.log(getASCII('!')) // 33
