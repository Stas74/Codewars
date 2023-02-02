// sPoNgEbOb MeMe

/*
Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

You need to create a function that converts the input into this format, 
with the output being the same string expect there is a pattern of uppercase and lowercase letters.

Example:

input:  "stop Making spongebob Memes!"
output: "StOp mAkInG SpOnGeBoB MeMeS!"
*/

function spongeMeme(sentence) {
  return sentence.split("").map((el, i) => i % 2 == 0 ? el.toUpperCase() : el.toLowerCase()).join("");
}

console.log(spongeMeme("stop Making spongebob Memes!")); // "StOp mAkInG SpOnGeBoB MeMeS!"


function spongeMeme(sentence) {
  return sentence.split('').map((v,i) => i % 2 ? v.toLowerCase(): v.toUpperCase()).join('');
}


const spongeMeme = $ => $.replace(/./gi, (x,i)=> i%2 ? x.toLowerCase() : x.toUpperCase() )


const spongeMeme = sentence =>
  sentence.replace(/./g, (val, idx) => val[`to${idx % 2 ? `Low` : `Upp`}erCase`]());
