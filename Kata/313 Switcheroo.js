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
