// Ordering the words!

/*

Given a string, you need to write a method that order every letter in this string in ascending order.

Also, you should validate that the given string is not empty or null. If so, the method should return:

"Invalid String!"
Notes
• the given string can be lowercase and uppercase.
• the string could include spaces or other special characters like '# ! or ,'. Sort them based on their ASCII codes
Examples
"hello world" => " dehllloorw"
"bobby"       => "bbboy"
""            => "Invalid String!"
"!Hi You!"    => " !!HYiou"

*/

function orderWord(s) {
  return s ? s.split("").sort().join("") : "Invalid String!";
}

console.log(orderWord("Hello, World!")); //  " !,HWdellloor"
console.log(orderWord("bobby")); //  "bbboy"
console.log(orderWord("")); //  "Invalid String!"




const orderWord = s => s ? [...s].sort().join('') : 'Invalid String!';


function orderWord(s){
  if (!s) {
  	return 'Invalid String!';
	}
  else if (s) {
  return s.split('').sort().join('');
  }
}



function orderWord(s){
  return s == "" || s == null ? "Invalid String!" : s.split("").sort().join("");
}


const orderWord = s =>
  s ? [...s].sort().join(``) : `Invalid String!`;
