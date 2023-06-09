// Most valuable character

/*
In this Kata, you will be given a string and your task is to return the most valuable character. 
The value of a character is the difference between the index of its last occurrence and 
the index of its first occurrence. 
Return the character that has the highest value. 
If there is a tie, return the alphabetically lowest character. [For Golang return rune]

All inputs will be lower case.

For example:
solve('a') = 'a'
solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
solve("axyzxyz") = 'x'
More examples in test cases. Good luck!

*/

function solve(st) {
  if ([...st].length == [...new Set([...st])].length) {
    return [...st].sort()[0];
  } else {
    let uniqueArr = [...new Set([...st])];
    let difArr = uniqueArr
      .sort()
      .map((el) => st.lastIndexOf(el) - st.indexOf(el));
    return uniqueArr[difArr.indexOf(Math.max(...difArr))];
  }
}

console.log(solve("a")); // 'a'
console.log(solve("aa")); // 'a'
console.log(solve("bcd")); // 'b'
console.log(solve("axyzxyz")); // 'x'
console.log(solve("aabccc")); // 'c'



function solve(str) {
  let maxDiff = 0, result = 'z';
  for (let el of str) {
    let diff = str.lastIndexOf(el) - str.indexOf(el);
      if (maxDiff < diff || maxDiff == diff && el <= result) {
        result = el;
        maxDiff = diff;
      }
    }
  return result;
}



const solve = function( str ) {
  let arr = [...str].map( el => str.lastIndexOf(el) - str.indexOf(el) ) 
  arr = arr.map( (el, i)=> el === Math.max(...arr) ? str[i] : '' )
  return arr.filter(el => el).sort()[0]
}



function solve(st) {
  return [...new Set([...st])].map(c => {
    return [c, st.lastIndexOf(c) - st.indexOf(c)];
  }).sort((a, b) => {
    const c = b[1] - a[1];
    if (c === 0) return a[0].localeCompare(b[0]);
    return c;
  })[0][0];
}



function solve(st) {
  return [...st].reduce((res, ch) => {
    const max = st.lastIndexOf(ch) - st.indexOf(ch);
    return (max > res.max || max === res.max && ch < res.ch) ? {max, ch} : res;
  }, {max : 0, ch: st[0]}).ch;
}



const solve = st =>
  [...new Set(st)].map(val => [val, st.lastIndexOf(val) - st.indexOf(val)]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0][0];
