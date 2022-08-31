// Love vs friendship

/*
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.
*/

function wordsToMarks(string) {
  return string
  .split("")
  .reduce((prev, cur) => prev + cur.charCodeAt(0) - 96, 0);
}
// console.log(string[0].charCodeAt(0) - 96)


console.log(wordsToMarks("attitude")); // 100
console.log(wordsToMarks("family")); // 66
