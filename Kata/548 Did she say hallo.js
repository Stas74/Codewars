// Did she say hallo?

/*
You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes

you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests
*/

function validateHello(greetings) {
  return (
    /hello/.test(greetings.toLowerCase()) ||
    /ciao/.test(greetings.toLowerCase()) ||
    /salut/.test(greetings.toLowerCase()) ||
    /hallo/.test(greetings.toLowerCase()) ||
    /hola/.test(greetings.toLowerCase()) ||
    /ahoj/.test(greetings.toLowerCase()) ||
    /czesc/.test(greetings.toLowerCase())
  );
}

console.log(validateHello("ahoj")); // true
console.log(validateHello("meh")); // false




const validateHello = greetings => /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings);



function validateHello(greetings) {
  return /(ahoj|ciao|czesc|h[ae]llo|hola|salut)/i.test(greetings)
}



const hellos = {
hello: 'english',
ciao: 'italian',
salut: 'french',
hallo: 'german',
hola: 'spanish',
ahoj: 'czech republic',
czesc: 'polish',
}

const validateHello = greetings => {
  for (key in hellos) {
   if (greetings.toLowerCase().includes(key)) {
     return true
   }
  }
  return false
}


