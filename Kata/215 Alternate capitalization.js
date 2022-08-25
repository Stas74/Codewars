// Alternate capitalization

/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. 
Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/

function capitalize(s){
  return [s.split('').map((v, i)=> i % 2 == 0 ? v.toUpperCase():v.toLowerCase()).join(''),
          s.split('').map((v, i)=> i % 2 !== 0 ? v.toUpperCase():v.toLowerCase()).join('')]
};

console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']



function capitalize(s){
  return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
};



function capitalize(s){
  return [[...s].map((x,i) => i % 2 == 0 ? x.toUpperCase() : x).join(''),
          [...s].map((x,i) => i % 2 != 0 ? x.toUpperCase() : x).join('')]
}



function capitalize(s) {
  const S = s.toUpperCase()
  let a = ""
  let b = ""
  for (let i = 0; i < s.length; ++i) {
    if (i & 1) {
      a += s[i]
      b += S[i]
    } else {
      a += S[i]
      b += s[i]
    }
  }
  return [a, b]
}


