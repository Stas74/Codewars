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
