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




function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return {
    status: msg
  };
}

// For anyone confused by this see the following: http://stackoverflow.com/questions/18221963/javascript-function-fails-to-return-object-when-there-is-a-line-break-between-th




const getStatus = isBusy => ({ status: isBusy ? "busy" : "available" });




function getStatus(isBusy) {
  return { status: isBusy ? "busy" : "available" }
}



const getStatus = isBusy => 
  ({status: isBusy ? `busy` : `available`});
