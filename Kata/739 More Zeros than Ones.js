// More Zeros than Ones

/*
Create a moreZeros function which will receive a string for input, 
and return an array (or null terminated string in C) containing only the characters from that string 
whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurrence of any such duplicates, 
so they are in the same order in the final array as they first appeared in the input string.

Examples

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False
                   
        --> ['a','b','d']
    
'DIGEST'--> ['D','I','E','T']
All input will be valid strings of length > 0. Leading zeros in binary should not be counted.
*/

function moreZeros(s) {
  const uniqVal = [...new Set(s.split(""))];
  const arrBinary = uniqVal.map((el) => el.charCodeAt().toString(2));
  const filteredArr = arrBinary.filter(
    (val) =>
      val.split("").filter((a) => a == "0").length >
      val.split("").filter((b) => b == "1").length
  );
  return filteredArr.map((el) => String.fromCharCode(parseInt(el, 2)));
}

console.log(moreZeros("abcde")); // ['a','b','d']
console.log(moreZeros("abcdeabcde")); // ['a','b','d'] Should not return duplicates values
console.log(moreZeros("Great job!")); // ['a', ' ', 'b', '!']



function moreZeros(s){
  let arrCodePoints = s.split('').map(c => c.charCodeAt(0)).map(n => n.toString(2));
  let chars = arrCodePoints.filter(s => s.split('0').length > s.split('1').length).map(s => parseInt(s, 2));
  let uniq = new Set(chars);
  return String.fromCharCode(...Array.from(uniq)).split('')
}



function moreZeros(s){
  return [...new Set([...s].filter((qure)=>{
     let f=qure.charCodeAt(0).toString(2).replace(new RegExp('0','g'),'').length,
         g=qure.charCodeAt(0).toString(2).replace(new RegExp('1','g'),'').length;
     return g>f
  }))]
}



const moreZeros = s =>
  [...new Set(s)].filter(val => val.charCodeAt().toString(2).replace(/1/g, ``).length > 3);




moreZeros = a => [...new Set(a)].filter(a=>(a.charCodeAt().toString(2).match(/0/g) || '').length > 3)
