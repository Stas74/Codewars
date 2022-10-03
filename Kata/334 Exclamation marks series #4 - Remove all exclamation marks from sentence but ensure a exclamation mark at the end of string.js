// Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string


/*
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. 
For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"
*/


function remove (string) {
  let finStr = "";
  for (let char of string) {
    if (char !== "!") {
      finStr += char;
    }
  }
  return finStr + "!"
}

console.log(remove("Hi!"))  // "Hi!"
console.log(remove("Hi! Hi!"))  // "Hi Hi!"



const remove = s => s.replace(/!+/g, "")+"!";

const remove = s => s.split("!").join("") + "!";
