// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  // let finalStr = str.replace(/[aeiouAEIOU]/g, "");
  return s.replace(/[!]/g, "");
}


console.log(removeExclamationMarks("Hello World!"));  //  "Hello World"
