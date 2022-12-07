// Arithmetic progression

/*
In your class, you have started lessons about arithmetic progression. 
Since you are also a programmer, you have decided to write a function that will return 
the first n elements of the sequence with the given common difference d and first element a. 
Note that the difference may be zero!

The result should be a string of numbers, separated by comma and space.

Example
# first element: 1, difference: 2, how many: 5
arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"
*/

function arithmeticSequenceElements(a, d, n) {
  const finArr = [a];
  for (let i = 1; i < n; i++) {
    a = finArr[i - 1];
    finArr.push(a + d);
  }
  return finArr.join(", ");
}

console.log(arithmeticSequenceElements(1, 2, 5)); //  "1, 3, 5, 7, 9"
console.log(arithmeticSequenceElements(1, 0, 5)); //  "1, 1, 1, 1, 1"
console.log(arithmeticSequenceElements(1, -3, 10)); //  "1, -2, -5, -8, -11, -14, -17, -20, -23, -26




function arithmeticSequenceElements(a,r,n) {
  var ret = [a]
  while (--n) ret.push(a+=r);
  return ret.join(', ')
}



function arithmeticSequenceElements(a, r, n) {
  return Array.from({length: n}, (_, i) => a + r * i).join(', ');
}



const arithmeticSequenceElements = (a, r, n) =>
  [...Array(n)].map((_, idx) => a + r * idx).join(`, `);
