// Scrolling Text

/*
Let's create some scrolling text!

Your task is to complete the function which takes a string, 
and returns an array with all possible rotations of the given string, in uppercase.

Example
scrollingText("codewars") should return:

[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
*/

function scrollingText(text) {
  let finArr = [text.toUpperCase()];
  for (let i = 1; i < text.length; i++) {
    let prevEl = finArr[i - 1];
    finArr.push(prevEl.slice(1, prevEl.length) + prevEl.slice(0, 1));
  }
  return finArr;
}

// console.log(text.slice(1, text.length) + text.slice(0, 1));
console.log(scrollingText("abc")); //  ["ABC","BCA","CAB"]
