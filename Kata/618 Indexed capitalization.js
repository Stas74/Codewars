// Indexed capitalization

/*
Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.
*/

function capitalize(s, arr) {
  return s.split("").map((el, index) => arr.includes(index) ? el.toUpperCase() : el).join("");
}

console.log(capitalize("abcdef", [1, 2, 5])); // "aBCdeF"
console.log(capitalize("codewars", [1, 3, 5, 50])); // "cOdEwArs"



function capitalize(s,arr){  
var capS = s.split("");

for(var i = 0; i < arr.length; i++) {
  if(capS[arr[i]]) {
    capS[arr[i]] = capS[arr[i]].toUpperCase();
  }
}
capS = capS.join("");
return capS
};



function capitalize(s,arr){
  return arr.reduce((a,b) => {
    if (a[b]) {
      a[b] = a[b].toUpperCase();
    }
    return a;
  }, [...s]).join('');
}




const capitalize = (string, array) => 
  string.replace(/./g, (char, index) =>
    array.includes(index) ? char.toUpperCase() : char
  );



const capitalize = (s, arr) =>
  s.replace(/\w/g, (val, idx) => arr.includes(idx) ? val.toUpperCase() : val);
