// String Scramble

/*

Given a string and an array of index numbers, 
return the characters of the string rearranged to be in the order specified by the accompanying array.

Ex:

scramble('abcd', [0,3,1,2]) -> 'acdb'

The string that you will be returning back will have: 
'a' at index 0, 'b' at index 3, 'c' at index 1, 'd' at index 2, 
because the order of those characters maps to their corresponding numbers in the index array.

In other words, put the first character in the string at the index described by the first element of the array

You can assume that you will be given a string and array of equal length and 
both containing valid characters (A-Z, a-z, or 0-9).

*/

// function scramble(str, arr) {
//   return arr.map((el, idx) => str[arr[el]]).join("");
// }

function scramble(str, arr) {
  let finArr = [];
  for (let i = 0; i < arr.length; i++) {
    finArr[arr[i]] = str[i];
  }
  return finArr.join("");
}

console.log(scramble("abcd", [0, 3, 1, 2])); // "acdb"
console.log(scramble("sc301s", [4, 0, 3, 1, 5, 2])); // "c0s3s1"
console.log(scramble("bskl5", [2, 1, 4, 3, 0])); // "5sblk"



function scramble(str, arr) {
  for(var r=[],i=0;i<arr.length;i++) r[arr[i]]=str[i]
  return r.join("")
};



const scramble = (s,ar) => s.split('').reduce((a,e,i,arr) => a + arr[ar.indexOf(i)],'');



function scramble(s, a) {
  return a.map((_,i)=>s[a.indexOf(i)]).join``
};


function scramble(str, arr) {
  let output = [];
  arr.forEach((charIdx, i) => output[charIdx] = str[i])
  return output.join('');
};



const scramble = (str, arr) =>
  arr.map((_, idx) => str[arr.indexOf(idx)]).join(``);
