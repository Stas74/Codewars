// Switcheroo

/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). 
Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function switcheroo(x){
  let finStr = ""
  for (const char of x) {
    char === "a" ? finStr += "b" : char === "b" ? finStr += "a" : finStr += char   
  }
  return finStr
}


console.log(switcheroo('abc'))  // "bac"
console.log(switcheroo('aaabcccbaaa'))  // "bbbacccabbb"
console.log(switcheroo('ccccc'))  // "ccccc"




const switcheroo = x => x.replace(/[ab]/g, x => x == "a" ? "b" : "a")

const switcheroo = x => x.replace(/[ab]/gi, match => match === 'a' ? 'b' : 'a');


function switcheroo(x){
  return [...x].map(v => v == 'a' ? v = 'b' : v == 'b' ? v = 'a' : v).join('');
}

function switcheroo(x){
  return x.split('').map(function(e){
    if (e =='b')return 'a';
    if (e == 'a') return 'b';
    if(e=='c') return 'c'
  }).join('');
}


