// Words to sentence

/*

Write function which will create a string from a list of strings, separated by space.

Example:

["hello", "world"] -> "hello world"

*/

function wordsToSentence(words) {
  return words.join(" ");
}

console.log(wordsToSentence(["hello", "world"])); // "hello world"



function wordsToSentence(words) {
  var x = "";
  for(let i = 0; i < words.length; i++){
    x = x + words[i] + " ";
  }
  return x.trim();
}



const wordsToSentence = (words) => words.reduce((acc,el)=> (acc + ' ').concat(el))



