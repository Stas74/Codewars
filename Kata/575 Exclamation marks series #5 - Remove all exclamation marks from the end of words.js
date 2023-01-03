// Exclamation marks series #5: Remove all exclamation marks from the end of words

/*
Remove all exclamation marks from the end of words. Words are separated by a single space. 
There are no exclamation marks within a word.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi Hi"
remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"
*/

function remove (string) {
  return string.split(" ").map(el => el.replace(/!+$/, '')).join(" ");
}

console.log(remove("Hi!!!")); // "Hi"
console.log(remove("!Hi!")); // "!Hi"
console.log(remove("Hi! Hi!")); // "Hi Hi"



function remove(s){
  return s.replace(/\b!+/g, '');  
}


function remove(s) {
  return s.replace(/(\w)!+/g, '$1');
}



const remove = str => [...str.split(' ')].map(el => el.replace(/!+$/g, '')).join(' ')
