// Transpose two strings in an array

/*
You will be given an array that contains two strings. 
Your job is to create a function that will take those two strings and transpose them, 
so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return

H W  
e o  
l r  
l l  
o d
A few things to note:

There should be one space in between the two characters
You don't have to modify the case (i.e. no need to change to upper or lower)
If one string is longer than the other, there should be a space where the character would be

*/

function transposeTwoStrings(array) {
  let finArr = [];
  array[0].length > array[1].length
    ? (array[1] = array[1] + " ".repeat(array[0].length - array[1].length))
    : (array[0] = array[0] + " ".repeat(array[1].length - array[0].length));
  for (let i = 0; i < array[0].length; i++) {
    finArr.push(array[0][i] + " " + array[1][i]);
  }
  return finArr.join("\n");
}

console.log(transposeTwoStrings(["Hello", "World"])); // "H W\ne o\nl r\nl l\no d"
console.log(transposeTwoStrings(["a", "cat"])); // "a c\n  a\n  t"
