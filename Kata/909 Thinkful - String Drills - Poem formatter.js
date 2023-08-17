// Thinkful - String Drills: Poem formatter

/*
You have a collection of lovely poems. Unfortunately, they aren't formatted very well. They're all on one line, like this:

Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. 
Complex is better than complicated.

What you want is to present each sentence on a new line, so that it looks like this:

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.

Write a function, format_poem() that takes a string like the one line example as an argument and 
returns a new string that is formatted across multiple lines with each new sentence starting on a new line when you print it out.

Try to solve this challenge with the str.split() and the str.join() string methods.

Every sentence will end with a period, and every new sentence will have one space before the previous period. 
Be careful about trailing whitespace in your solution.

STRINGS
*/

function formatPoem(poem) {
  return poem.split(". ").join(".\n")
}

console.log(formatPoem('Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.')); 
// 'Beautiful is better than ugly.\nExplicit is better than implicit.\nSimple is better than complex.\nComplex is better than complicated.'

console.log(formatPoem("Flat is better than nested. Sparse is better than dense. Readability counts. Special cases aren't special enough to break the rules.")); 
// "Flat is better than nested.\nSparse is better than dense.\nReadability counts.\nSpecial cases aren't special enough to break the rules."



const formatPoem = s => {
  return s.replace(/\. /g, '.\n');
}


const formatPoem = poem => poem.replace(/\.\s/g, '.\n');



const formatPoem = str => str.split(/(?<=[.!?])\s/).join('\n');
