// filterEvenLengthWords

/*
Write a function called "filterEvenLengthWords".

Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements 
of the given array whose length is an even number.

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);

console.log(output); // --> ['word', 'word']
*/

function filterEvenLengthWords(words) {
  return words.filter(el => {if (el.length % 2 == 0) return el})
}

console.log(filterEvenLengthWords(['One', 'Two', 'Three', 'Four'])); // ["Four"]



function filterEvenLengthWords(words) {
  return words.filter(s => s.length % 2 === 0)
}


const filterEvenLengthWords = w => w.filter(e => !(e.length % 2))


const filterEvenLengthWords = words =>
  words.filter(val => !(val.length & 1));
