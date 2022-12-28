// Inspiring Strings

/*
When given a string of space separated words, return the word with the longest length. 
If there are multiple words with the longest length, return the last instance of the word with the longest length.

Example:

'red white blue' //returns string value of white

'red blue gold' //returns gold
*/

function longestWord(stringOfWords) { 
  const strArr = stringOfWords.split(" ");
  const maxLength = Math.max(...strArr.map((el) => el.length));
  return strArr.reverse().filter(el => el.length == maxLength)[0];
}

console.log(longestWord("a b c d e fgh")); // "fgh"
console.log(longestWord("one two three")); // "three"
console.log(longestWord("red blue grey")); // "grey"



let longestWord = s => s.split(' ').reduceRight((a,b)=>(b.length>a.length) ? b : a);


function longestWord(str){
  return str.split(' ').sort((b, a) => b.length - a.length).pop();
}


const longestWord = a => a.split(' ').reduce((s,n)=> s.length > n.length ? s : n, '')


