// String transformer

/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.
*/

function stringTransformer(str) {
  return str.split(" ").map(el => el.split("").map(ch => ch == ch.toLowerCase() ? ch.toUpperCase() : ch.toLowerCase()).join("")).reverse().join(" ")
}

console.log(stringTransformer('Example string')); // 'STRING eXAMPLE'




function stringTransformer(str) {
  return str
    .split(' ')
    .reverse()
    .join(' ')
    .split('')
    .map(v => v == v.toUpperCase() ?
      v.toLowerCase() :
      v.toUpperCase())
    .join('');
}



const stringTransformer = s => s.split(' ').reverse().join(' ').split('').map(invertCase).join('');
const invertCase = c => /[a-z]/.test(c) ? c.toUpperCase() : c.toLowerCase();



function stringTransformer(s) {
  return s.replace(/./g,m=>m.toUpperCase()==m?m.toLowerCase():m.toUpperCase()).split(' ').reverse().join(' ')
}


