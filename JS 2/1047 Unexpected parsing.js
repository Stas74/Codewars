// Unexpected parsing

/*
Here is a piece of code:

function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return 
  {
    status: msg
  }
}
Expected Behavior
Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" 
depending on the truth value of the argument is_busy.

But as you will see after clicking RUN or ATTEMPT this code has several bugs, please fix them.

*/

function getStatus(isBusy) {
  let msg = isBusy ? "busy" : "available";
  let obj = {
    status: msg,
  };
  return obj;
}

console.log(getStatus(true).status); // "busy"
