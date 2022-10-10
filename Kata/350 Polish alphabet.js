// Polish alphabet

/*
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/

function correctPolishLetters (string) {
  return string.split("").map( char => char === "ą" ? "a" : char == "ć" ? "c" : char == "ę" ? "e" : char == "ł" ? "l" : 
  char == "ń" ? "n" : char == "ó" ? "o" : char == "ś" ? "s" : char == "ź" || char == "ż" ? "z" : char).join("")
}


console.log(correctPolishLetters("Jędrzej Błądziński")) // "Jedrzej Bladzinski"
console.log(correctPolishLetters("Lech Wałęsa")) // "Lech Walesa"
console.log(correctPolishLetters("Maria Skłodowska-Curie")) // "Maria Sklodowska-Curie"




function correctPolishLetters (string) {
  var dict = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
  return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
}





var polishLetters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
};

function correctPolishLetters (string) {
  return string.split('').map((c) => polishLetters[c] || c).join("");
}




function correctPolishLetters (string) {
  return string
  .replace(/ł/g, 'l')
  .replace(/ą/g, 'a')
  .replace(/ć/g, 'c')
  .replace(/ę/g, 'e')
  .replace(/ń/g, 'n')
  .replace(/ó/g, 'o')
  .replace(/ś/g, 's')
  .replace(/ź/g, 'z')
  .replace(/ż/g, 'z')
}




function correctPolishLetters(s) {
  return s.replace(/[ąćęłńóśźż]/g, c => "acelnoszz"["ąćęłńóśźż".indexOf(c)])
}
