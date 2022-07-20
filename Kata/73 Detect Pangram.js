// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
// Ignore numbers and punctuation.

function isPangram(string) {
  const splitString = string.toLowerCase().split('');
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (const letter of splitString) {
    for (let i = 0; i < alphabet.length; i++) {
      if (letter === alphabet[i]) {
        alphabet[i] = '';
      }
    }
  }
  alphabet = alphabet.filter(value => value !== '');

  return !alphabet.length ? true : false;

  // let finObj = {};
  // const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g;
  // const result =string.replace(regex, "").split('');
  // for (let elem of result) {
  //   finObj[elem] ? (finObj[elem] += 1) : (finObj[elem] = 1);
  // }
  // for (let obj in finObj) {
  //   if (finObj[obj] > 1) {
  //     return false
  //   }
  // }
  // return true
}


console.log(isPangram("The quick brown fox jumps over the lazy dog.")); // true




function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}


function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}



function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}


function isPangram(string) {
  const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];

  return alphabetList.every((letter) => string.toLowerCase().includes(letter));
}


function isPangram(str) {
    var s = str.toLowerCase();
    var letters = "zqxjkvbpygfwmucldrhsnioate";
    for (var i = 0; i < 26; i++)
        if (s.indexOf(letters.charAt(i)) == -1)
            return false;
    return true;
}
