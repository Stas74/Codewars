// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  // Implement me
  const nameChar = (name[0].toUpperCase());
  let message;
  message = nameChar === 'R' ? name + ' plays banjo' : name + ' does not play banjo';
 
  return message;
}


console.log(areYouPlayingBanjo("Adam"))  // "Adam does not play banjo"
console.log(areYouPlayingBanjo("Ringo"))  // "Ringo plays banjo"
console.log(areYouPlayingBanjo("rolf"))  // "rolf plays banjo"
