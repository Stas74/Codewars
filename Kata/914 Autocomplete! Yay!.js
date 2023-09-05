 // Autocomplete! Yay!

/*
It's time to create an autocomplete function! Yay!

The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary 
that start with the input string. 
If there are more than 5 matches, restrict your output to the first 5 results. 
If there are no matches, return an empty array.

Example:

autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']
For this kata, the dictionary will always be a valid array of strings. 
Please return all results in the order given in the dictionary, even if they're not always alphabetical. 
The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.

For example, "Apple" and "airport" would both return for an input of 'a'. 
However, they should return as "Apple" and "airport" in their original cases.

Important note:

Any input that is NOT a letter should be treated as if it is not there. 
For example, an input of "$%^" should be treated as "" and an input of "ab*&1cd" should be treated as "abcd".
*/

function autocomplete(input, dictionary){
  input = input.replace(/[^a-z]/gi,'');
  return dictionary.filter(el => input === el.slice(0, input.length).toLowerCase()).slice(0, 5);
}

console.log(autocomplete('ai', ['airplane','airport','apple','ball'])); // ['airplane','airport']




function autocomplete(input, dictionary){
  var r = new RegExp('^' + input.replace(/[^a-z]/gi,''), 'i');
  return dictionary.filter(function(w){ return r.test(w); }).slice(0, 5);
}



function autocomplete(input, dictionary){
  input = input.toLowerCase().replace(/[^a-z]/g, '');
  return dictionary.filter(function (x) {
    return x.slice(0, input.length).toLowerCase() == input;
  }).slice(0, 5);
}



const autocomplete = (input, dictionary) => dictionary.filter(w => w.toLowerCase().startsWith(input.replace(/[^A-Z]/gi,''))).slice(0,5);



const autocomplete = (input, dictionary) =>
  dictionary.filter(val => new RegExp(`^${input.replace(/[^A-Z]/gi, ``)}`, `i`).test(val))
    .slice(0, 5);


