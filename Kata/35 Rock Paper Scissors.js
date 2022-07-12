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


// -----------------------------------------------------

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};


const rps = (p1, p2) => {
  if(p1 === p2) {
    return 'Draw!'
  }; 
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}


const rps = (p1, p2) => {
  var map = {
    'rock': 'scissors',
    'scissors': 'paper',
    'paper': 'rock'
  };
  
  if (p1 == p2) {
    return 'Draw!';
  } else {
    return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
  }
};


rps=(a,b)=>a==b?'Draw!':`Player ${/rp|ps|sr/.test(a[0]+b[0])?2:1} won!`;

