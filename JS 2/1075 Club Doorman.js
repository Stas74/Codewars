// Club Doorman

/*
The Club Doorman will give you a word. To gain access, you need to provide the right number according to the given word.

Each word contains exactly one pair of consecutive identical letters, such as the tt in lettuce.

To determine the number, find the position of the repeated letter in the alphabet (where a is 1, b is 2, ..., z is 26) 
and multiply it by 3.

TASK
Implement a function that takes a word as input and returns the correct number.

EXAMPLE
For the word lettuce, the repeated letter is t, which is the 20th letter in the alphabet.

The correct answer is 20 × 3 = 60.

NOTE
You may assume that the given string will

always contain exactly one pair of consecutive identical letters.

consist only of lowercase English letters.
*/

function passTheDoorMan(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i + 1]) {
      return (word[i].charCodeAt() - 96) * 3;
    }
  }
}

console.log(passTheDoorMan("lettuce")); // 60
console.log(passTheDoorMan("hill")); // 36
console.log(passTheDoorMan("apple")); // 48



const passTheDoorMan = w => ((w.match(/(.)\1/)[1]).charCodeAt(0) - 96) * 3


const passTheDoorMan = word => (word.match(/(.)\1/)[1].charCodeAt() - 96) * 3


const passTheDoorMan = word => 
  [...word].slice(1).filter((el, i)=>[...word][i] === el ).reduce((acc, e)=> acc + (e.charCodeAt()-96) * 3, 0)


function passTheDoorMan (word){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let letter;
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === word[i + 1]) {
      letter = word[i];
    }
  }
  return (alphabet.indexOf(letter) + 1) * 3
}


const passTheDoorMan = word => (word.match(/(.)\1/)[1].charCodeAt() & 31) * 3;


