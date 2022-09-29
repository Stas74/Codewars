// Greet Me

/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/


var greet = function(name) {
  return "Hello " + name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase() + "!"
};


console.log(greet('riley'))  // 'Hello Riley!'




var greet = function(name) {
  return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
};



greet = n => `Hello ${n[0].toUpperCase()}${n.substr(1).toLowerCase()}!`;


var greet = function(name) {
  return "Hello " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
};
