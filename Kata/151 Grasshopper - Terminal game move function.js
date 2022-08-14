// Grasshopper - Terminal game move function

// Terminal game move function
// In this game, the hero moves from left to right. 
// The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero 
// and the roll (1-6) and return the new position.

// Example:
// move(3, 6) should equal 15

function move (position, roll) {
  return position + roll * 2;
}


console.log(move(0, 4)); // 8
console.log(move(3, 6)); // 15
console.log(move(2, 5)); // 12





function move (position, roll) {
  // return the new position
  return roll >= 1 && roll <= 6 ? roll * 2 + position : null;
}



function move (position, roll) {
  // return the new position
  return roll >= 1 && roll <= 6 ? roll * 2 + position : null;
}
