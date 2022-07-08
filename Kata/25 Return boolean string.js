// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b){
  //your code here
  return true == b ? "true" : "false";
}

console.log(booleanToString(true));  // "true"
console.log(booleanToString(false));  // "false"



function booleanToString(b){
  return b ? 'true' : 'false';
}


function booleanToString(b){
  return b.toString();
}


function booleanToString(b){
  return String(b);
}
