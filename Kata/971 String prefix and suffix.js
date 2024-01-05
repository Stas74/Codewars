// String prefix and suffix

/*
In this Kata, you will be given a string and your task will be to return the length of the longest prefix 
that is also a suffix. 
A prefix is the start of a string while the suffix is the end of a string. 
For instance, the prefixes of the string "abcd" are ["a","ab","abc"]. 
The suffixes are ["bcd", "cd", "d"]. You should not overlap the prefix and suffix.

for example:

solve("abcd") = 0, because no prefix == suffix. 
solve("abcda") = 1, because the longest prefix which == suffix is "a".
solve("abcdabc") = 3. Longest prefix which == suffix is "abc".
solve("aaaa") = 2. Longest prefix which == suffix is "aa". You should not overlap the prefix and suffix
solve("aa") = 1. You should not overlap the prefix and suffix.
solve("a") = 0. You should not overlap the prefix and suffix.
All strings will be lowercase and string lengths are 1 <= length <= 500

More examples in test cases. Good luck!
*/

function solve(s) {
  let counter = 0;
  let i = 1;
  while (i <= s.length / 2) {
    if (s.slice(0, i) == s.slice(-i)) {
      counter = i;
    }
    i++;
  }
  return counter;
}

console.log(solve("abcd")); // 0
console.log(solve("abcda")); // 1
console.log(solve("abcdabc")); // 3
console.log(solve("abcabc")); // 3
console.log(solve("abcabca")); // 1




let solve = s => s.match(/^(.*).*\1$/)[1].length;



function solve(s){  
    //input: string
    // output: number (length of suffix)
    //mechanical way: suffixes are every letters which are repeated. Check if the suffixes are the same as the beginning
    // if beginning == ending? if no lenght = 0; if yes, length = suffix.length
    let maxLen = 0; 
    let sLen = s.length;
    for(let i = 0; i <= sLen/2; i++) {
      maxLen =  s.substring(0, i) == s.substring(sLen-i) ? i : maxLen;
    }
    return maxLen;
}



function solve(s,i=s.length>>1) { while (i && s.slice(0,i)!=s.slice(-i)) --i; return i; }



solve = (s) =>
  [...s].reduce(
    (x, _, i) =>
      i * 2 < s.length - 1 && s.slice(0, i + 1) === s.slice(-i - 1) ? i + 1 : x,
    0
  );


const solve = (s) => {  
  for (let i = s.length / 2 ^ 0; i > 0; i--)
    if (s.slice(0, i) === s.slice(-i)) return i;
  return 0;
}




