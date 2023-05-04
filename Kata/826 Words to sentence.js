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
