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




const MATCH = {
  scissors: ['paper', 'lizard'],
  paper: ['rock', 'spock'],
  rock: ['lizard', 'scissors'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'],
};

function rpsls(pl1, pl2) {
  return MATCH[pl1].indexOf(pl2) >= 0 ? 'Player 1 Won!' :
         MATCH[pl2].indexOf(pl1) >= 0 ? 'Player 2 Won!' : 'Draw!';
}



function rpsls(pl1, pl2) {
    if (pl1 === pl2) return 'Draw!'
    let rules = {
        'paper': ['rock', 'spock'],
        'rock': ['lizard', 'scissors'],
        'lizard': ['spock', 'paper'],
        'spock': ['scissors', 'rock'],
        'scissors': ['lizard', 'paper']       
    }
    if (rules[pl1].includes(pl2))
        return 'Player 1 Won!'
    else
        return 'Player 2 Won!'
}



function rpsls(p1,p2){
  let wins = {
    scissors:['paper','lizard'],
    paper:['rock','spock'],
    rock:['lizard','scissors'],
    lizard:['spock','paper'],
    spock:['scissors','rock']
  }
  
  let player1 = wins[p1].includes(p2)
  let player2 = wins[p2].includes(p1)
  
  if (!player1 && !player2) { return 'Draw!' } 
  return `Player ${ player1?'1':'2'} Won!`
}



function rpsls(p1,p2){
  if ((p1=="rock" && p2=="lizard") 
      ||(p1=="paper" && p2=="rock") 
      ||(p1=="scissors" && p2=="lizard") 
      ||(p1=="lizard" && p2=="paper")
      ||(p1=="paper" && p2=="spock")
      ||(p1=="rock" && p2=="scissors")
      ||(p1=="lizard" && p2=="spock")
      ||(p1=="scissors" && p2=="paper")
      ||(p1=="spock" && p2=="scissors")
      ||(p1=="spock" && p2=="rock"))
    return "Player 1 Won!";
  if (p1==p2)
    return "Draw!"
  return "Player 2 Won!";
}



function rpsls(pl1,pl2){
	const list = 'rock paper scissors spock lizard'.split(' ');
  const offset = (list.indexOf(pl2) - list.indexOf(pl1) + 5) % 5;
  return offset === 0 ? 'Draw!' : (offset % 2 === 0 ? 'Player 1 Won!' : 'Player 2 Won!')
}



function rpsls(a,b){
  var win="ScissorsPaper PaperRock RockLizard LizardSpock SpockScissors ScissorsLizard LizardPaper PaperSpock SpockRock RockScissors".toLowerCase()
  return win.includes(a+b)?'Player 1 Won!':win.includes(b+a)?'Player 2 Won!':'Draw!'
}



