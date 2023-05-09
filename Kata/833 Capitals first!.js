// Capitals first!

/*

Create a function that takes an input String and returns a String, 
where all the uppercase words of the input String are in front and all the lowercase words at the end. 
The order of the uppercase and lowercase words should be the order in which they occur.

If a word starts with a number or special character, skip the word and leave it out of the result.

Input String will not be empty.

For an input String: "hey You, Sort me Already!" the function should return: "You, Sort Already! hey me"

*/
// remove numbers and special characters

function capitalsFirst(str) {
  str = str.split(" ").filter((el) => /^[a-zA-Z]/.test(el[0]));
  return (
    str.filter((el) => el[0] == el[0].toUpperCase()).join(" ") +
    " " +
    str.filter((el) => el[0] == el[0].toLowerCase()).join(" ")
  );
}

console.log(capitalsFirst("hey You, Sort me Already!")); // "You, Sort Already! hey me"
console.log(capitalsFirst("You 123 Me 123 baby and")); // 'You Me baby and'



function capitalsFirst(str){
	let words = str.split(' ');
  let upper = words.filter(function(x) { return x.charAt(0).match(/[A-Z]/) });
  let lower = words.filter(function(x) { return x.charAt(0).match(/[a-z]/) });
  return upper.concat(lower).join(' ');
}



function capitalsFirst(str) {
  return str
    .split(" ")
    .filter(([a]) => a >= "a" && a <= "z" || a >= "A" && a <= "Z")
    .sort(([a], [b]) => a < "a" && b >= "a" ? -1 : a >= "a" && b < "a" ? 1 : 0)
    .join(" ")
}


const capitalsFirst = str =>
  (fn => [...fn(/^[A-Z]/), ...fn(/^[a-z]/)].join(` `))
  (reg => str.split(` `).filter(val => reg.test(val)));


function capitalsFirst(str){
  var s1=str.match(/( |^)[A-Z]([^ ]+)?(?= |$)/g)||[];
  var s2=str.match(/( |^)[a-z]([^ ]+)?(?= |$)/g)||[];
  return s1.concat(s2).map(x=>x.trim()).join(" ");
}
