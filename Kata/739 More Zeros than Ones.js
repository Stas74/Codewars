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
