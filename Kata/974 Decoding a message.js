// Decoding a message

/*
You have managed to intercept an important message and you are trying to read it.

You realise that the message has been encoded and can be decoded by switching each letter with a corresponding letter.

You also notice that each letter is paired with the letter that it coincides with when the alphabet is reversed.

For example: "a" is encoded with "z", "b" with "y", "c" with "x", etc

You read the first sentence:

"r slkv mlylwb wvxlwvh gsrh nvhhztv"
After a few minutes you manage to decode it:

"i hope nobody decodes this message"
Create a function that will instantly decode any of these messages

You can assume no punctuation or capitals, only lower case letters, but remember spaces!
*/

function decode(message) {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  const cba = "zyxwvutsrqponmlkjihgfedcba";

  return message
    .split("")
    .map((el) => (el == " " ? " " : abc[cba.indexOf(el)]))
    .join("");
}


console.log("sr"); // "hi"
console.log("svool"); // "hello"



const decode = $ => $.replace(/[a-z]/g, x=> "zyxwvutsrqponmlkjihgfedcba"['abcdefghijklmnopqrstuvwxyz'.indexOf(x)])



var decode = m => [...m].map(x=>x==" " ? x : String.fromCharCode(219-x.charCodeAt())).join("");



const LOWER = "abcdefghijklmnopqrstuvwxyz";

function decode(message){
  return message.split("").map(c => {
    var i = LOWER.indexOf(c);
    return i === -1 ? c : LOWER[25 - i];
  }).join("");
}



function decode(m){s=""; for (i=0;i<m.length;i++) s+=(a=m.charCodeAt(i))==32?' ':String.fromCharCode(219-a); return s}



const decode = message =>
  message.replace(/[a-z]/g, val => String.fromCharCode(219 - val.charCodeAt()));



const decode = (message) => message.replace(/[a-z]/g, c => {
  return "abcdefghijklmnopqrstuvwxyz"["zyxwvutsrqponmlkjihgfedcba".indexOf(c)]
})
