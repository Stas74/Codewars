// Duck Duck Goose

/*
The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), 
return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name
*/

function duckDuckGoose(players, goose) {
  return players[goose % players.length -1]
}
  

// function duckDuckGoose(players, goose) {
//   return players[(goose - 1) % players.length].name;
// }

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];

console.log(duckDuckGoose(ex_names, 1))  // "a"
console.log(duckDuckGoose(ex_names, 3))  // "c"
console.log(duckDuckGoose(ex_names, 18))  // "g"
