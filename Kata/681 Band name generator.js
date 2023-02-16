// Band name generator

/*
My friend wants a new band name for her band. 
She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

"dolphin" -> "The Dolphin"

However, when a noun STARTS and ENDS with the same letter, 
she likes to repeat the noun twice and connect them together with the first and last letter, 
combined into one word (WITHOUT "The" in front), like this:

"alaska" -> "Alaskalaska"

Complete the function that takes a noun as a string, and returns her preferred band name written as a string.
*/

function bandNameGenerator(str) {
  return str[0] !== str[str.length - 1]
    ? `The ${str[0].toUpperCase() + str.slice(1)}`
    : str[0].toUpperCase() + str.slice(1, -1) + str;
}

console.log(bandNameGenerator("knife")); // "The Knife"
console.log(bandNameGenerator("tart")); // "Tartart"
console.log(bandNameGenerator("sandles")); // "Sandlesandles"



const bandNameGenerator = s => s[0] != s[s.length-1] ? "The " + s[0].toUpperCase() + s.slice(1) :
       s[0].toUpperCase() + s.slice(1) + s.slice(1);



bandNameGenerator = s => s[0] === s[s.length - 1] ? 
  `${s[0].toUpperCase()}${s.slice(1, -1)}${s}` :
  `The ${s[0].toUpperCase()}${s.slice(1)}`;



const bandNameGenerator = str =>
  (str.endsWith(str[0]) ? `${str.slice(0, -1)}${str}` : `the ${str}`).replace(/(^| )\w/g, val => val.toUpperCase());



function bandNameGenerator(str) {
  if(str[0] != str.slice(-1)){
    return 'The' + ' ' + str[0].toUpperCase() + str.slice(1)
  }
  else{
    return str[0].toUpperCase() + str.slice(1).repeat(2)
  }
}
