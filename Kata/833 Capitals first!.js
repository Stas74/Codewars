// Capitals first!

/*

Create a function that takes an input String and returns a String, 
where all the uppercase words of the input String are in front and all the lowercase words at the end. 
The order of the uppercase and lowercase words should be the order in which they occur.

If a word starts with a number or special character, skip the word and leave it out of the result.

Input String will not be empty.

For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

*/
// remove numbers and special characters

function capitalsFirst(str) {
  str = str.split(" ").filter((el) => /^[a-zA-Z]/.test(el[0]));
  return (
    str.filter((el) => el[0] == el[0].toUpperCase()).join(" ") +
    " " +
    str.filter((el) => el[0] == el[0].toLowerCase()).join(" ")
  );
}

console.log(capitalsFirst("hey You, Sort me Already!")); // "You, Sort Already! hey me"
console.log(capitalsFirst("You 123 Me 123 baby and")); // 'You Me baby and'
