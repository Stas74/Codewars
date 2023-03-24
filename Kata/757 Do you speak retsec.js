// Do you speak retsec?

/*
You and your friends want to play undercover agents. 
In order to exchange your secret messages, you've come up with the following system: 
you take the word, cut it in half, and place the first half behind the latter. 
If the word has an uneven number of characters, you leave the middle at its previous place:

retsec examples

That way, you'll be able to exchange your messages in private.

Task
You're given a single word. Your task is to swap the halves. 
If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.

Examples
reverseByCenter("secret")  == "retsec" // no center character
reverseByCenter("agent")   == "nteag"  // center character is "e"
Remarks
Don't use this to actually exchange messages in private.
*/

function reverseByCenter(s) {
  const halfLen = Math.floor(s.length / 2);
  return s.length % 2 == 0
    ? s.slice(halfLen) + s.slice(0, halfLen)
    : s.slice(-halfLen) + s[halfLen] + s.slice(0, halfLen);
}

console.log(reverseByCenter("secret")); // "retsec"
console.log(reverseByCenter("agent")); // "nteag"
console.log(reverseByCenter("raw")); // "war"



function reverseByCenter(s) {
  var n = s.length / 2
  return s.slice(Math.ceil(n)) + s.slice(Math.floor(n), Math.ceil(n)) + s.slice(0, Math.floor(n))
}



function reverseByCenter(s) {
  return (
    s.substring(Math.ceil(s.length / 2)) +
    s.substring(s.length / 2, Math.ceil(s.length / 2)) +
    s.substring(0, s.length / 2)
  );
}



function reverseByCenter(s) {
  return (
    s.substring(Math.ceil(s.length / 2)) +
    s.substring(s.length / 2, Math.ceil(s.length / 2)) +
    s.substring(0, s.length / 2)
  );
}



function reverseByCenter(s){
  var halfStrLength = s.length/2;
  var firstHalf = s.substring(halfStrLength, s.length);
  var secondHalf = s.substring(0, halfStrLength);
  var middleChar = s.charAt(halfStrLength);
    
  if (s.length % 2 === 0) {
    return firstHalf + secondHalf; 
  } else {
      firstHalf = s.substring(halfStrLength + 1, s.length);
      return firstHalf + middleChar + secondHalf;
  }
}



const reverseByCenter = s =>
  (val => s.replace(new RegExp(`(.{${val}})(.?)(.{${val}})`), `$3$2$1`))
  (s.length / 2 ^ 0);



const reverseByCenter = str => (
  len => (
    midChar => 
      str.slice(-len) + midChar + str.slice(0, len)
  )(len % 1 ? str[len | 0] : '')
)(str.length/2)
