// Alphabet symmetry

/*
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. 
In the alphabet, a and b are also in positions 1 and 2. 
Notice also that d and e in abode occupy the positions they would occupy in the alphabet, 
which are positions 4 and 5.

Given an array of words, 
return an array of the number of letters that occupy their positions in the alphabet for each word.
For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]

See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.
*/

function solve(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return arr.map(word => {
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
      if (alphabet[i] === word[i].toLowerCase()) {
        counter++;
      }      
    }
    return counter;
  })
}


// word.split("").reduce((prev, cur, index) => prev + index == alphabet.indexOf(cur)) ? 1 : 0, 0
// console.log(alphabet.indexOf("f"))

console.log(solve(["abode", "ABc", "xyzD"])); // [4,3,1]
console.log(solve(["abide", "ABc", "xyz"])); // [4,3,0]
