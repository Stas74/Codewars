// Search for letters

/*
The objective is to set each of the 26 characters of the output string to either '1' or '0' 
based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character
 of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, s
 et the second character to '1', and so on for the rest of the alphabet.

For instance:

"a   **&  cZ"  =>  "10100000000000000000000001"
*/

function change(string) {
  let finStr = "0".repeat(26).split(""); 
  string = string.replace(/[^a-z]/gi, "").toLowerCase();
  let uniqIndexStr = [...new Set([...string])].map(el =>  el.charCodeAt() - 97);
  uniqIndexStr.map((el) => finStr[el] = 1 )
  return finStr.join("");
}

console.log(change("aA **&  bzZ")); // "11000000000000000000000001"



function change(string) {
  string = string.toLowerCase()
  return 'abcdefghijklmnopqrstuvwxyz'.split('').map(function (c) { 
    return string.indexOf(c) !== -1 ? 1 : 0;
  }).join('');
}


const change = str => 'abcdefghijklmnopqrstuvwxyz'.split('').map(x => str.toLowerCase().includes(x) ? 1 : 0).join('')


function change(s){
  let a = Array.from({length:26},_=>0);
  [...s.toUpperCase()].forEach(x=>a[x.charCodeAt(0)-65]=1);
  return a.join('');  
}



const change = string =>
  [...Array(26)].map((_, idx) => +new RegExp(String.fromCharCode(65 + idx), `i`).test(string)).join(``);



