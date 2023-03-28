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



function ultimateReverse(words) {
    let reversed = [...words.join('')].reverse();
    return words.map(word => reversed.splice(0, word.length).join(''));
}



const ultimateReverse = (arr, str = [...arr.join``].reverse().join``, start = 0) => 
  arr.reduce((a,c) => (a.push(str.slice(start,start+c.length)), start+=c.length, a), []);



const ultimateReverse = s =>
  (arr => s.map(val => arr.splice(0, val.length).join(``)))
  ([...s.join(``)].reverse());
