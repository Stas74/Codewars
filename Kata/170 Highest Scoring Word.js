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




function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}



function high(words) {

  const alpha = ' abcdefghijklmnopqrstuvwxyz';
  const score = word => word.split('').reduce((a, b) => a + alpha.indexOf(b), 0);

  return words
    .split(' ')
    .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
    .sort((a, b) => a.score - b.score || b.pos - a.pos)
    .pop()
    .word;
    
}


function high(x){
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  const words = x.split(' ')
  const scores = words.map(x => [...x].map(y => alpha.indexOf(y) + 1)).map(x => x.reduce((a,b) => a + b,0))
  
  return words[scores.indexOf(Math.max(...scores))]
}
