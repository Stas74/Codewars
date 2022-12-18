// Filter Long Words

/*
Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

Example:

* With input "The quick brown fox jumps over the lazy dog", 4
* Return ['quick', 'brown', 'jumps']
*/

function filterLongWords(sentence, n) {
  return sentence.split(" ").filter(el => el.length > n);
}

console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4)); // ['quick', 'brown', 'jumps']



const filterLongWords = (sentence, n) => sentence.split(/\s/g).filter( wd => wd.length > n )


function filterLongWords(sentence, n) {
  let words = sentence.split(' ');
  let longWords = [];
  
  for (let word of words) {
    if (word.length > n) {
      longWords.push(word);
    }
  }
  return longWords;
}
