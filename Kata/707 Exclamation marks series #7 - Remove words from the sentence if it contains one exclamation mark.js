// Exclamation marks series #7 - Remove words from the sentence if it contains one exclamation mark

/*
Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, 
without leading/trailing spaces.

Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!""
*/

function remove(string) {
  return string.split(" ").filter(el => el.replace(/[^!]/g, "").length != 1).join(" ");
}

console.log(remove("Hi!")); // ""
console.log(remove("Hi! Hi! Hi!")); // ""
console.log(remove("Hi Hi! Hi!")); // "Hi"
console.log(remove("Hi! Hi!! Hi!")); // "Hi!!"
console.log(remove("Hi! !Hi! Hi!")); // "Hi!!"


function remove(s){
  return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
}


const remove = $ => $.split(/\s+/).filter(el => !/^(!\w+|\w+!)$/.test(el)).join(" ")


function remove (string){
  const str = string.split(' ');
  const result = []
  for (let i of str){
    if ((i.match(/!/g) || []).length !== 1){
      result.push(i)
    }
  }
  return result.join(' ')
}


