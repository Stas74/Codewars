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


function remove(s) {
  return s.replace(/!+(?!!*$)/g, '');
}


function remove(s) {
  var i = s.length - 1;
  while (s[i] === "!") {
    i--;
  }
  var start = s.slice(0, i + 1);
  var end = s.slice(i + 1);
  return start.replace(/!/g, "") + end;
}


const remove = s => {
  const sLength = s.length
  const endExclamations = sLength - s.replace(/!+$/g, '').length
  return s.slice(0, sLength - endExclamations)
    .replace(/!/g, '')
    .concat('!'.repeat(endExclamations))
}
