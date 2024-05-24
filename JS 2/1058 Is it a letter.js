// Is it a letter?

/*
This is the simple version of Shortest Code series. 

*/

function isItLetter(character) {
  return /[a-z]/i.test(character);
}

console.log(isItLetter("a")); // true
console.log(isItLetter("1")); // false



function isItLetter(character) {
    return character == character.toUpperCase() ? character !== character.toLowerCase():
    character !== character.toUpperCase()
}



function isItLetter(cc) {
  if( cc.toLowerCase() === cc.toUpperCase()) return false;
  return true
}



const isItLetter = (char) => char.toLowerCase() !== char.toUpperCase() 




function isItLetter(character) {
  // Check if character is a string
  if (typeof character !== "string") {
    return false;
  }

  if (
    (character >= 'a' && character <= 'z') ||
    (character >= 'A' && character <= 'Z')
  ) {
    return true; 
  }

  return false; 
}



function isItLetter(character) {
  let characters = character.toLowerCase();
  const letter = 'qwertyuiopasdfghjklzxcvbnm';
  if(letter.includes(characters)){
    return true;
  }else{
   return false
  }
  return ;




