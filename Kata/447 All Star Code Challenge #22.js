// All Star Code Challenge #22

/*
Create a function that takes an integer argument of seconds and converts the value 
into a string describing how many hours and minutes comprise that many seconds.

Any remaining seconds left over are ignored.

Note:
The string output needs to be in the specific form - "X hour(s) and X minute(s)"

For example:

3600 --> "1 hour(s) and 0 minute(s)"
3601 --> "1 hour(s) and 0 minute(s)"
3500 --> "0 hour(s) and 58 minute(s)"
323500 --> "89 hour(s) and 51 minute(s)"
*/

function toTime(seconds) {
  const minutes = Math.floor(seconds / 60) % 60
  const hours = Math.floor(Math.floor(seconds / 60) / 60)
  return `${hours} hour(s) and ${minutes} minute(s)`
}

console.log(toTime(3600)); // '1 hour(s) and 0 minute(s)'
console.log(toTime(3601)); // '1 hour(s) and 0 minute(s)'
console.log(toTime(3500)); // '0 hour(s) and 58 minute(s)'
console.log(toTime(323500)); // '89 hour(s) and 51 minute(s)'




function toTime(time) {
  var h = Math.floor(time / 3600);
  var m = Math.floor(time % 3600 / 60);
  return h + " hour(s) and " + m + " minute(s)";
}



const toTime = ( $ ) => `${Math.floor($/3600)} hour(s) and ${Math.floor($/60) % 60} minute(s)`


function toTime(seconds) {
  return `${seconds / 3600 | 0} hour(s) and ${(seconds / 60) % 60 | 0} minute(s)`
}
