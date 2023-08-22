// Shared Bit Counter

/*
Complete the method that returns true if 2 integers share at least two 1 bits, otherwise return false. 
For simplicity assume that all numbers are non-negative.

Examples
 7  =  0111 in binary
10  =  1010
15  =  1111
7 and 10 share only a single 1-bit (at index 2) --> false
7 and 15 share 3 1-bits (at indexes 1, 2, and 3) --> true
10 and 15 share 2 1-bits (at indexes 0 and 2) --> true
Hint: you can do this with just string manipulation, but binary operators will make your life much easier.
*/

function sharedBits(a, b) {
  let counter = 0;
  let aBin = a.toString(2);
  let bBin = b.toString(2);
  if (aBin.length != bBin.length) {
    aBin.length < bBin.length ? aBin = "0".repeat(bBin.length - aBin.length) + aBin : 
    bBin = "0".repeat(aBin.length - bBin.length) + bBin
  }
  for (let i = 0; i < aBin.length; i++) {
    if (aBin[i] == 1 && bBin[i] == 1) {
      counter++;
    }
  }
  return counter > 1;
}

console.log(sharedBits(1, 2)); // false
console.log(sharedBits(16, 8)); // false
console.log(sharedBits(7, 15)); // true
console.log(sharedBits(43, 77)); // true
console.log(sharedBits(7, 10)); // false
console.log(sharedBits(7, 56)); // false




function sharedBits(a, b) {
 return (a & b).toString(2).replace(/0/g, '').length > 1
}



function sharedBits(a, b) {
  a = [...a.toString(2)].reverse();
  b = [...b.toString(2)].reverse();
  return a.filter((e,i)=> e > 0 && e === b[i]).length > 1
} //dupa



// I like RegEXp
const sharedBits = (a, b) => ((a & b).toString(2).match(/1/g) || []).length  > 1



function sharedBits(a, b) {
  return a & b & (a & b) - 1 ? true : false;  //  from Python solution by Mercy Madmask
}


sharedBits = (a, b) => !!(a & b & (a & b) - 1);


function sharedBits(a, b) {  
  a = a.toString(2).split('').map(Number);
  b = b.toString(2).split('').map(Number);
  let count = 0;
  
  const normalizeLength = (arr) => {
    //when 8 bits just isn't enough... >:)
    while(arr.length <= 32) {
      arr.unshift(0);
    }
  }
  
  normalizeLength(a);
  normalizeLength(b);  
  
  for(let i=0; i<a.length; i++) {
    if(a[i] == 1 && b[i] == 1) {
      count += 1;
      
    }
  }  
  return count >= 2 ? true : false;
}
