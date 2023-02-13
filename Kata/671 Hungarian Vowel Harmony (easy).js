// Hungarian Vowel Harmony (easy)

/*
Vowel harmony is a phenomenon in some languages. 
It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" (wikipedia). 
This kata is based on vowel harmony in Hungarian.

Task:
Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word 
w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.

Vowel Harmony Rules (simplified)
When the last vowel in the word is

a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
a back vowel (a, á, o, ó, u, ú) the suffix is -nak

Examples:

dative("ablak") == "ablaknak"
dative("szék") == "széknek"
dative("otthon") == "otthonnak"

Preconditions:
1. To keep it simple: All words end with a consonant :)
2. All strings are unicode strings.
3. There are no grammatical exceptions in the tests.
*/

function dative(word) {
  return /[aáoóuú]/g.test(word) ? word + "nak" : word + "nek";
}

console.log(dative("ablak")); // "ablaknak"
console.log(dative("tükör")); // "tükörnek"
console.log(dative("keret")); // "keretnek"




function dative(word){
  var str = word;
  var nekArr = ["e","é","i","í","ö","ő","ü","ű"];
  var nakArr = ["a","á","o","ó","u","ú"];
  for(var i=str.length-1;i>=0;i--){
    if(nekArr.indexOf(str[i])!==-1) return str + "nek";
    if(nakArr.indexOf(str[i])!==-1) return str + "nak";
  }
}



const dative = word =>
  `${word}n${/[eéiíöőüű][^eéiíöőüűaáoóuú]*$/.test(word) ? `e` : `a`}k`;



const dative = s => s + ('aáoóuú'.includes(s.replace(/[^aáoóuúeéiíöőüű]/g, '').slice(-1)) ? 'nak' : 'nek');



function dative(word) {
  let lastVowel = word.replace(/[^eéiíöőüűaáoóuú]/gi, '').slice(-1)
  return 'eéiíöőüű'.match(lastVowel) ? word + 'nek' : word + 'nak'
}



let dative = w => 'eéiíöőüű'.includes(w.match(/[eéiíöőüűaáoóuú][^eéiíöőüűaáoóuú]+$/)[0][0]) ? w+'nek' : w+'nak'
