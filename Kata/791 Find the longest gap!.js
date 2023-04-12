// Find the longest gap!

/*

A binary gap within a positive number num is any sequence of consecutive zeros that is surrounded by ones at both ends 
in the binary representation of num.

For example:

9 has binary representation 1001 and contains a binary gap of length 2.
529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3.
20 has binary representation 10100 and contains one binary gap of length 1.
15 has binary representation 1111 and has 0 binary gaps.

Write function gap(num) that,  given a positive num,  returns the length of its longest binary gap.
The function should return 0 if num doesn't contain a binary gap.

*/

function gap(num) {
  let arrLen = num.toString(2).split("1").map(el => el.length);
  if (arrLen[arrLen.length - 1] != 0) {
    arrLen.pop();
  }
  return Math.max(...arrLen);
}

console.log(gap(9)); // 2
console.log(gap(529)); // 4
console.log(gap(20)); // 1
console.log(gap(15)); // 0




const gap = num => (num.toString(2).match(/10+(?=1)/g) || [' ']).sort().pop().length - 1;



function gap(num) {
 	binary  = num.toString(2)
  zeros   = binary.match(/0+(?=1)/g) || ['']
  longest = zeros.sort().pop() 
  return longest.length
}


const gap = n => n.toString(2).split('1').slice(0, -1).sort().pop().length;


function gap(num) {
    return Math.max.apply(null, num.toString(2).match(/0*(!?1)/g).map(a => a.length - 1));
}


