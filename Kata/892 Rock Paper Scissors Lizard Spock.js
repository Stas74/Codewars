// Rock Paper Scissors Lizard Spock

/*
In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. 

The rules are as follows:

Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
Rock crushes Scissors
Task:
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

Inputs
Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".
*/

function rpsls(pl1, pl2) {
  if (pl1 == pl2) {
    return "Draw!";
  }
  if (pl1 == "rock" && (pl2 == "lizard" || pl2 == "scissors")) {
    return "Player 1 Won!";
  }
  if (pl1 == "paper" && (pl2 == "spock" || pl2 == "rock")) {
    return "Player 1 Won!";
  }
  if (pl1 == "scissors" && (pl2 == "lizard" || pl2 == "paper")) {
    return "Player 1 Won!";
  }
  if (pl1 == "lizard" && (pl2 == "spock" || pl2 == "paper")) {
    return "Player 1 Won!";
  }
  if (pl1 == "spock" && (pl2 == "scissors" || pl2 == "rock")) {
    return "Player 1 Won!";
  }
  return "Player 2 Won!";
}

console.log(rpsls("rock", "lizard")); // 'Player 1 Won!'
console.log(rpsls("paper", "rock")); // 'Player 1 Won!'
console.log(rpsls("spock", "rock")); // 'Player 1 Won!'

console.log(rpsls("lizard", "scissors")); // 'Player 2 Won!'
console.log(rpsls("spock", "lizard")); // 'Player 2 Won!'

console.log(rpsls("rock", "rock")); // 'Draw!'
