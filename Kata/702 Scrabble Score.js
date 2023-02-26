// Scrabble Score

/*
Write a program that, given a word, computes the scrabble score for that word.

Letter Values
You'll need these:

Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
There will be a preloaded hashtable $dict with all these values: $dict["E"] == 1.

Examples
"cabbage" --> 14
"cabbage" should be scored as worth 14 points:

3 points for C
1 point for A, twice
3 points for B, twice
2 points for G
1 point for E
And to total:

3 + 2*1 + 2*3 + 2 + 1 = 3 + 2 + 6 + 3 = 14

Empty string should return 0. The string can contain spaces and letters (upper and lower case), 
you should calculate the scrabble score only of the letters in that string.

""           --> 0
"STREET"    --> 6
"st re et"    --> 6
"ca bba g  e" --> 14
*/

const dict = {
  E: 1,
  A: 1,
  I: 1,
  O: 1,
  N: 1,
  R: 1,
  T: 1,
  L: 1,
  S: 1,
  U: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10,
};

function scrabbleScore(str) {
  return str.replace(/\s/g, "").split("").reduce((prev, cur) => prev + dict[cur.toUpperCase()], 0);
}

console.log(scrabbleScore("a")); // 1
console.log(scrabbleScore("street")); // 6
console.log(scrabbleScore("st re et")); // 6



function scrabbleScore(str){
  return str.toUpperCase().split('').reduce(function(score,v){ return score + ($dict[v] || 0)},0)
}


function scrabbleScore(str){
  var output = 0;
  for (var i in str) {
    output += $dict[str[i].toUpperCase()] || 0;
  }
  return output;
}


const scrabbleScore = str => str.replace(/[^a-z]/ig, '')
                                .split('')
                                .map(el => $dict[el.toUpperCase()])
                                .reduce( (a, b) => a + b, 0 )



const scrabbleScore = str =>
  [...str.toUpperCase()].reduce((pre, val) => pre + ($dict[val] || 0), 0);
