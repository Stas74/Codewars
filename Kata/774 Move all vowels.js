// Move all vowels

/*
Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

Vowels are (in this kata): a, e, i, o, u

Note: all provided input strings are lowercase.

Examples
"day"    ==>  "dya"
"apple"  ==>  "pplae"
*/

function moveVowel(input) {
  return input.replace(/[aeiou]/g, "") + input.replace(/[^aeiou]/g, "");
}

console.log(moveVowel("apple")); // "pplae"
console.log(moveVowel("peace")); // "pceae"



function moveVowel(input) 
{
  var cs = "";
  var vs = "";
  for(var i=0;i<input.length;i++)
  {
    if("aeiouAEIOU".indexOf(input.charAt(i)) == -1)
    {
      cs += input.charAt(i);
    }
    else
    {
      vs += input.charAt(i);
    }
  }
  return cs + vs;
}


function moveVowel(input) {
    var vow = input.match(/[aeiou]/gi) || [];
    var conso = input.match(/[^aeiou]/gi) || [];
    return conso.concat(vow).join('')
}


function moveVowel(s) {
  return (k='',s=s.replace(/[aeuoi]/g,m=>(k+=m,'')),s+k)
}


function moveVowel(input) {
return (input.match(/[^aeiou]/g)||[]).join("") + (input.match(/[aeiou]/g)||[]).join("")
}


