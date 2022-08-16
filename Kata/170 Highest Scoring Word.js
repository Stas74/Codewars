// Highest Scoring Word

/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
  let scoreArr = []  
  x.split(' ').forEach(element => {
    let wordScore = 0
    for (let char of element) {
      wordScore += char.charCodeAt() - 96
    }
    scoreArr.push(wordScore);
  }); 
  let maxScore = Math.max(...scoreArr)  
  return x.split(' ')[scoreArr.findIndex(x => x == maxScore)]
}


console.log(high('man i need a taxi up to ubud')) // 'taxi'
console.log(high('take me to semynak')) // 'semynak'
