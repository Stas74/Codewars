// Triple Trouble

/*
Triple Trouble

Create a function that will return a string that combines all of the letters of the three inputed strings in groups. 
Taking the first letter of all of the inputs and grouping them next to each other. 
Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.
*/

function tripleTrouble(one, two, three) {
  let finStr = "";
  for (let i = 0; i < one.length; i++) {
    finStr += one[i] + two[i] + three[i];
  }
  return finStr;
}

console.log(tripleTrouble("aaa", "bbb", "ccc")); // "abcabcabc"
console.log(tripleTrouble("Sea", "urn", "pms")); // "Supermans"




function tripleTrouble(one, two, three) {
  var result = "";
  for (let i = 0; i < one.length; i++) {
    result += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return result;
}



const tripleTrouble = (one, two, three) => one.split("").map((letter, index) => letter + two[index] + three[index]).join("");



function tripleTrouble(one, two, three){
  return one.replace(/./g,(v,i) => v + two[i] + three[i])
 }




const tripleTrouble = (one, two, three) =>
  one.replace(/\w/g, (val, idx) => val + two[idx] + three[idx]);




const tripleTrouble = (one, two, three) => 
  one.split('').reduce((acc, c, i, array) => 
    [acc, one[i], two[i], three[i]].join(''), '')



// Recursive solution
const tripleTrouble = (...arg) =>
  !arg[0][0] ? '' : arg.map(i => i[0]).join('') + tripleTrouble(...arg.map(i => i.slice(1)))




function tripleTrouble(one, two, three){
  let len = [one, two, three].sort((a,b)=> b.length - a.length)[0]
  return [...len].map((_, i)=> (one[i] || '') + (two[i] || '') + three[i]).join('')
 }//dupa
