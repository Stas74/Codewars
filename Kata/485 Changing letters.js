// Changing letters

/*
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.
*/

function swap(string) {
  string = string.replace(/[a]/g, "A");
  string = string.replace(/[e]/g, "E");
  string = string.replace(/[i]/g, "I");
  string = string.replace(/[o]/g, "O");
  string = string.replace(/[u]/g, "U");
  return string;
}

console.log(swap("HelloWorld!")); //  "HEllOWOrld!"
console.log(swap("abracadabra")); //  "AbrAcAdAbrA!"
console.log(swap("Monday")); //  "MOndAy"



function swap(st){
  return st.replace(/[aeiou]/g, v => v.toUpperCase() )
}


function swap(str) {
  return str.replace(/[aeiou]/g, c => "AEIOU"["aeiou".indexOf(c)])
}


const vowels = ["a", "e", "i", "o", "u"];
const swap = s => s.split('').map(x => vowels.includes(x) ? x.toUpperCase() : x).join('');
