// Sort the Vowels!

/*
Sort the Vowels!
In this kata, we want to sort the vowels in a special format.

Task
Write a function which takes a input string s and return a string in the following way:

   
                  C|                          R|
                  |O                          n|
                  D|                          d|
   "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|

Notes:

List all the Vowels on the right side of |
List every character except Vowels on the left side of |
for the purpose of this kata, the vowels are : a e i o u
Return every character in its original case
Each line is seperated with \n
Invalid input ( undefined / null / integer ) should return an empty string
*/

function sortVowels(s) {
  return typeof(s) == "string" ? s.split("").map(el => /[aeiou]/i.test(el) ? "|" + el : el + "|").join("\n") : "";
}

console.log(sortVowels("Codewars")); // 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|'
console.log(sortVowels("Rnd Te5T")); // 'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|'
console.log(sortVowels(1337)); // ""



const sortVowels = s => typeof s !== 'string' ? '' : [...s].map(e => /[aeiou]/i.test(e) ? `|${e}` : `${e}|`).join('\n');



function sortVowels(s){
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  if (typeof s === "string") return [...s].map(letter => vowels.includes(letter) ? `|${letter}` : `${letter}|`).join('\n');
  return '';
}



function sortVowels(s){
  return s === s + [] ? [...s].map(el => el.match(/[aeiou]/i) ? `|${el}` : `${el}|`).join('\n') : ''
}


const sortVowels = s => typeof s === 'string' && s.split('').map( c => 'aeiou'.includes(c.toLowerCase() )? '|'+c : c+'|').join('\n') || ''
