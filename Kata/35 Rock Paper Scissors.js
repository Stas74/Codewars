// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  let r = "rock",
    s = "scissors",
    p = "paper";
  if (p1 == p2) {
    return "Draw!";
  }
  // if (p1 == r && p2 == s) {
  //   return "Player 1 won!";
  // } else if (p1 == s && p2 == p) {
  //   return "Player 1 won!";
  // } else if (p1 == p && p2 == r) {
  //   return "Player 1 won!";
  // } else {
  //   return "Player 2 won!";
  // }
  return p1 == r && p2 == s || p1 == s && p2 == p || p1 == p && p2 == r ? "Player 1 won!" : "Player 2 won!"
};

console.log(rps("rock", "scissors")); // 1
console.log(rps("scissors", "rock")); // 2
console.log(rps("rock", "rock")); // -
