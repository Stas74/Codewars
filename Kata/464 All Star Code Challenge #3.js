// All Star Code Challenge #3

/*
Create a function, called removeVowels (or remove_vowels), 
that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

removeVowels("drake") // => "drk"
removeVowels("aeiou") // => ""
*/

var removeVowels = function (str) {
  return str.replace(/[aeiou]/g, "");
};

console.log(removeVowels("drake")); // "drk"
console.log(removeVowels("aeiou")); // ""



var removeVowels = function(str){
  const chng = str.split("")
    const items = chng.filter(function(letter) {
      return ["a", "e", "i", "o", "u"].indexOf(letter) < 0  
  })
  return items.join("")
}


const removeVowels = $ => $.replace(/[aeiou]/gi, '')
