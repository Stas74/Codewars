// String reverse slicing 101

/*
You'll be given a string of characters as an input. 
Complete the function that returns a list of strings: (a) in the reverse order of the original string, 
and (b) with each successive string starting one character further in from the end of the original string.

Assume the original string is at least 3 characters long. Try to do this using slices and avoid converting the string to a list.

Examples
'123'   ==>  ['321', '21', '1']
'abcde' ==>  ['edcba', 'dcba', 'cba', 'ba', 'a']
*/

function reverseSlice(str) {
  let revStr = str.split("").reverse().join("");
  let finArr = [];
  for (let i = 0; i < revStr.length; i++) {
    finArr.push(revStr.slice(i));
  }
  return finArr;
}

console.log(reverseSlice("123")); // ['321', '21', '1']
console.log(reverseSlice("abcde")); // ['edcba', 'dcba', 'cba', 'ba', 'a']





function reverseSlice(s) {
  return Array(s.length).fill(0).map((e, i) => s.split("").reverse().join("").slice(i));
}



const reverseSlice = str =>
  Array(str.length).fill(str.replace(/./g, (_, idx) => str[str.length - ++idx])).map((val, idx) => val.slice(idx));



const reverseSlice = (str, arr = []) => 
	str ?
  	arr.concat(reverseStr(str), reverseSlice(str.slice(0, -1), arr)) :
    arr
    
const reverseStr = str => [...str].reverse().join('')



reverseSlice = s => (s = s.split('').reverse().join('')).split('').map((e, i) => e = s.slice(i));



function reverseSlice(str) {
  return Array(str.length).fill([...str].reverse().join('')).map((e,i) => e.slice(-(str.length-i)));
}



function reverseSlice(s) {
  return [...s].reverse().map((_,i,a)=>a.slice(i).join``);
}
