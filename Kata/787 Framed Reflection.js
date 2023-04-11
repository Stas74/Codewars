// Framed Reflection

/*

You are given a message (text) that you choose to read in a mirror (weirdo). 
Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:

'*********\n* olleH *\n* dlroW *\n*********'

Words in your solution should be left-aligned.

*/

function mirror(text) {
  let revStrArr = text.split(" ").map((el) => el.split("").reverse().join(""));
  let maxLen = Math.max(...revStrArr.map((el) => el.length));
  let starsStr = "*".repeat(maxLen + 4);
  revStrArr = revStrArr.map((el) =>
    el.length < maxLen ? "* " + el.padEnd(maxLen) + " *" : "* " + el + " *"
  );
  revStrArr.push(starsStr);
  revStrArr.unshift(starsStr);
  return revStrArr.join("\n");
}

console.log(mirror("Hello World")); // '*********\n* olleH *\n* dlroW *\n*********'
console.log(mirror("Codewars")); // '************\n* srawedoC *\n************'
console.log(mirror("Hellooo World")); // '*********\n* olleH *\n* dlroW *\n*********'
