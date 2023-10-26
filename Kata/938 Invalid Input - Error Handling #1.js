// Invalid Input - Error Handling #1

/*
Error Handling is very important in coding and seems to be overlooked or not implemented properly.

#Task

Your task is to implement a function which takes a string as input and return an object containing the properties vowels and consonants. 
The vowels property must contain the total count of vowels {a,e,i,o,u}, and the total count of consonants {a,..,z} - {a,e,i,o,u}. 
Handle invalid input and don't forget to return valid ones.

#Input

The input is any random string. You must then discern what are vowels and what are consonants and sum for each category 
their total occurrences in an object. 
However you could also receive inputs that are not strings. 
If this happens then you must return an object with a vowels and consonants total of 0 because the input was NOT a string. 
Refer to the Example section for a more visual representation of which inputs you could receive and the outputs expected. :)

Example:
Input: getCount('test')
Output: {vowels:1,consonants:3}

Input: getCount('tEst')
Output: {vowels:1,consonants:3}

Input getCount('    ')
Output: {vowels:0,consonants:0}

Input getCount()
Output: {vowels:0,consonants:0}
*/

function getCount(words) {
  words = words.replace(/[^a-z]/gi, "");
  return {
    vowels: words.replace(/[^aeiou]/gi, "").length,
    consonants: words.replace(/[aeiou]/gi, "").length,
  };
}

console.log(getCount("Test")); // {vowels:1,consonants:3}
console.log(getCount("Here is some text")); // {vowels:6,consonants:8}




function getCount(words) {
  let f = typeof words === 'string';
  return {
    vowels: f ? words.replace(/[^aeiou]/gi,'').length : 0,
    consonants: f ? words.replace(/[^bcdfghjklmnpqrstvwxyz]/gi,'').length : 0
  }
}




function getCount(words) { 
  var vowels = 0
  var consonants = 0
  
  if (typeof words == "string") {
    for (var c of words.toLowerCase().trim()) {
      if ("aeiou".indexOf(c) >= 0) vowels++
      else if ("bcdfghjklmnpqrstvwxyz".indexOf(c) >= 0) consonants++
    }
  }
  
  return { vowels, consonants }
}



const getCount = words =>
  (words => ({vowels: (words.match(/[aieou]/ig) || []).length, consonants: (words.match(/[b-df-hj-np-tv-z]/ig) || []).length}))
  (typeof words === `string` ? words : ``);




const getCount = words => {
  const out = {vowels: 0, consonants: 0};
  if (typeof words !== 'string') return out;
  out.vowels = (words.match(/[aeiouAEIOU]/g) || []).length;
  out.consonants = (words.match(/[b-df-hj-nJ-Np-tP-Tv-zB-DF-HV-Z]/g) || []).length;
  return out;
}



function getCount(words) {
  let letterSort = {vowels: 0, consonants: 0}; 
  if(typeof words === 'string' ){
    letterSort.vowels     = (words.match(/[aeyuio]/gi) || []).length;
    letterSort.consonants = (words.match(/[qwrtpsdfghjklzxcvbnm]/gi) || []).length;
  }
  return letterSort; 
}
