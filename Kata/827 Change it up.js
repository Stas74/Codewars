// Change it up

/*

Create a function that takes a string as a parameter and does the following, in this order:

Replaces every letter with the letter following it in the alphabet (see note below)
Makes any vowels capital
Makes any consonants lower case
Note:

 -- the alphabet should wrap around, so Z becomes A
 -- in this kata, y isn't considered as a vowel.

So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)

*/

function changer(str) {
  let lowerArr = str
    .split("")
    .map((el) => (el == el.toUpperCase() ? el.toLowerCase() : el));
  let indexArr = lowerArr.map((el) =>
    el.codePointAt() < 97 || el.codePointAt() > 122
      ? el.codePointAt()
      : el.codePointAt() == 122
      ? 97
      : el.codePointAt() + 1
  );
  return indexArr
    .map((el) => String.fromCharCode(el))
    .join("")
    .replace(/[aeiou]/g, (el) => el.toUpperCase());
}

console.log(changer("Cat30")); // 'dbU30'
