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
