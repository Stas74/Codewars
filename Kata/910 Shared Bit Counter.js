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
