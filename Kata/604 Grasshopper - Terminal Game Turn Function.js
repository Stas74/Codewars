// Grasshopper - Terminal Game Turn Function

/*
Terminal game turn function
You are creating a text-based terminal version of your favorite board game. 
In the board game, each turn has six steps that must happen in this order: 
roll the dice, move, combat, get coins, buy more health, and print status.

You are using a library (Game.Logic in C#) that already has the functions below. 
Create a function named doTurn/DoTurn/do_turn that calls the functions in the proper order as described 
in the paragraph above.

- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move
*/

function doTurn() {
  // Call functions here
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"])); // [4, 3, 1]
console.log(duplicates([0, 1, 2, 3, 4, 5])); // []




const doTurn = () => {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}



function doTurn () {
  return [rollDice, move, combat, getCoins, buyHealth, printStatus].map( $ => $() )
}


