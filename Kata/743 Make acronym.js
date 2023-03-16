// Make acronym

/*
Write function which takes a string and make an acronym of it.

Rule of making acronym in this kata:

split string to words by space char
take every first letter from word in given string
uppercase it
join them toghether
Eg:

Code wars -> C, w -> C W -> CW
Note: There will be at least two words in the given string!
*/

function toAcronym(inp) {
  return inp.split(" ").map(el => el[0].toUpperCase()).join("");
}

console.log(toAcronym("Code Wars")); // "CW"
console.log(toAcronym("Water Closet")); // "WC"
console.log(toAcronym("Portable Network Graphics")); // "PNG"
console.log(toAcronym("hyper text markup language")); // "HTML"
