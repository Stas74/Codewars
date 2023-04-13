// Convert the score

/*

You are working at a lower league football stadium and you've been tasked with automating the scoreboard.

The referee will shout out the score, 
you have already set up the voice recognition module which turns the ref's voice into a string, 
but the spoken score needs to be converted into a pair for the scoreboard!

e.g. "The score is four nil" should return [4,0]

Either teams score has a range of 0-9, and the ref won't say the same string every time e.g.

"new score: two three"
  
"two two"
  
"Arsenal just conceded another goal, two nil"
Note:

Please return an array
Please rate and enjoy!

*/

function scoreboard(string) {
  const score = ["nil", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const strArr = string.split(" ");
  return strArr.slice(-2).map(el => score.indexOf(el));
}

// [strArr[strArr.length - 2], strArr[strArr.length - 1]];

console.log(scoreboard("The score is four nil")); // [4,0]
console.log(scoreboard("new score: two three")); // [2,3]
console.log(scoreboard("two two")); // [2,2]



function scoreboard(string) {
  var arr = string.split(" ");
  var a = [
    "nil",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  return [a.indexOf(arr[arr.length - 2]), a.indexOf(arr[arr.length - 1])];
}



function scoreboard(string) {
  var dict = {'nil': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 
              'six': 6, 'seven': 7, 'eight': 8, 'nine': 9};
  return string.match(/(nil|one|two|three|four|five|six|seven|eight|nine)/g).map(e => dict[e]);
}


const scoreboard = string => {
  const dictionary = {
    'nil': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
  };
  const scoreOne = string.split(' ').reverse()[1];
  const scoreTwo = string.split(' ').reverse()[0];
  return [dictionary[scoreOne], dictionary[scoreTwo]];
}



function scoreboard(string) {
  let score = ['nil','one','two','three','four', 'five','six','seven','eight','nine']
  return string.split(' ')
               .filter(x => score.includes(x))
               .map(x => score.lastIndexOf(x))
}



const scores = {
    nil: '0',
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
  }

const scoreboard = (string) => string.split(" ").filter(s => scores[s]).map(v => parseInt(scores[v]));


scoreboard = a => a.split` `.slice(-2).map(i=>d={nil:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9}[i])
