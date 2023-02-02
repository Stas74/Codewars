// Exclamation marks series #3 - Remove all exclamation marks from sentence except at the end

/*
Remove all exclamation marks from sentence except at the end.

Examples
remove("Hi!") == "Hi!"
remove("Hi!!!") == "Hi!!!"
remove("!Hi") == "Hi"
remove("!Hi!") == "Hi!"
remove("Hi! Hi!") == "Hi Hi!"
remove("Hi") == "Hi"
*/

function remove (string) {
  return string.replace(/!+([^!])/g, '$1')
}


console.log(remove("Hi!!!")); // "Hi!!!"
console.log(remove("Hi! Hi!")); // "Hi Hi!"
