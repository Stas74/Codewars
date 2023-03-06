// Exclamation marks series #8: Move all exclamation marks to the end of the sentence

/*
Move all exclamation marks to the end of the sentence

Examples
remove("Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!!"
remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"
*/

function remove(string) {
  return string.split("!").join("") + "!".repeat(string.split("!").length - 1);
}

console.log(remove("Hi!")); // "Hi!"
console.log(remove("Hi! Hi!")); // "Hi Hi!!"
console.log(remove("Hi! !Hi Hi!")); // "Hi Hi Hi!!!"



function remove(s) {
  return s.replace(/!/g, '') + s.replace(/[^!]/g, '');
}


function remove(s) {
  const x = s.replace(/!+/g, "")
  return x + "!".repeat(s.length - x.length)
}



function remove(s){
  let lets="", excs="";
  for(let i of s){
    if(i==="!"){
      excs+=i;
    }else{
      lets+=i;
    }
  }
  return lets+excs;
}
