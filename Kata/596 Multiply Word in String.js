// Multiply Word in String

/*
You are to write a function that takes a string as its first parameter. 
This string will be a string of words.

You are expected to then use the second parameter, which will be an integer, 
to find the corresponding word in the given string. The first word would be represented by 0.

Once you have the located string you are finally going to multiply by it the third provided parameter, 
which will also be an integer. You are additionally required to add a hyphen in between each word.

Example

modifyMultiply ("This is a string",3,5) 
*/

function modifyMultiply(str, loc, num) {
  return Array(num).fill(str.split(" ")[loc]).join("-")
}
// Array(n).fill(v)

console.log(modifyMultiply("This is a string", 3, 5)); // "string-string-string-string-string"



function modifyMultiply (str,loc,num) {
  return (str.split(" ")[loc]+"-").repeat(num).slice(0,-1)
} 



