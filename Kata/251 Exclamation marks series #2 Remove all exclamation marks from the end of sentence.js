// Exclamation marks series #2 Remove all exclamation marks from the end of sentence

/*
Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

function remove (string) {  
  while (string[string.length - 1] === "!") {
    string = string.slice(0, -1)
  }
  return string
}
// return string[string.length - 1] === "!" ? string.slice(0, -1) : string;

console.log(remove("Hi!"))  // "Hi"
console.log(remove("Hi! Hi!"))  // "Hi! Hi"
console.log(remove("Hi"))  // "Hi"



function remove(s){
  return s.replace(/!+$/, '');
}

const remove = s => s.replace(/!+$/, '');


function remove(s)
{
    while(s && s.slice(-1) == "!") 
    { 
        s = s.slice(0,-1) 
    }
    return s;
}
