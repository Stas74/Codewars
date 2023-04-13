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
