// Crash Override

/*
Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples 
from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

Notes:
Two objects that return a one word name in response to the first letter of the first name and 
one for the first letter of the surname are already given.

If the first character of either of the names given to the function is not a letter from A - Z, 
you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate 
for these grammatical errors.

var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
*/

var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache'}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst'}


const firstLetter = str => str[0].toUpperCase()

const isValidName = name => /[a-z]/gi.test(name)

const aliasGen = (fName, sName) =>
  isValidName(fName[0]) && isValidName(sName[0])
    ? `${firstName[firstLetter(fName)]} ${surname[firstLetter(sName)]}`
    : 'Your name must start with a letter from A - Z.'

// function aliasGen(f, l){
//   const firstLetter = str => str[0].toUpperCase()
//   return  /[a-zA-Z]/gi.test(firstLetter(f)) ||  /[a-zA-Z]/gi.test(firstLetter(l)) ? 
//   firstName[f.slice(0, 1).toUpperCase()] + " " + surname[l.slice(0, 1).toUpperCase()] :
//   "Your name must start with a letter from A - Z.";
// }

console.log(aliasGen("Aike", "billington")) //  "Malware Mike"
console.log(aliasGen("Fahima", "Tash")) // "Function T-Rex"
console.log(aliasGen("7393424", "Anumbha")) // "Your name must start with a letter from A - Z."
