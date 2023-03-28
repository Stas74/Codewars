// Ultimate Array Reverser

/*
Given an array of strings, 
reverse them and their order in such way that their length stays the same as the length of the original inputs.

Example:
Input:  {"I", "like", "big", "butts", "and", "I", "cannot", "lie!"}
Output: {"!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"}
Good luck!
*/

const ultimateReverse = (s) => {
  const arrLen = s.map((el) => el.length);
  const string =  s.join("").split("").reverse();
  return arrLen.map((el, i) => string.splice(0, el).join(""))
};

console.log(
  ultimateReverse(["I", "like", "big", "butts", "and", "I", "cannot", "lie!"])
);
// ["!", "eilt", "onn", "acIdn", "ast", "t", "ubgibe", "kilI"]
