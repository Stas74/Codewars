// Sum of numbers from 0 to N

/*
We want to generate a function that computes the series starting from 0 and ending until the given number.


Input:
> 6

Output:
0+1+2+3+4+5+6 = 21

Input:
> -15

Output:
-15<0

Input:
> 0

Output:
0=0
*/

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if (count === 0) return "0=0"
    if (count < 0) return `${count}<0`
    let total = 0;
    let leftPart = "0"
    for (let i = 1; i <= count; i++) {
      total += i
      leftPart += `+${i}`      
    }
    return leftPart + " = " + `${total}`
  };

  return SequenceSum;

})();

console.log(SequenceSum.showSequence(6)) // "0+1+2+3+4+5+6 = 21"
console.log(SequenceSum.showSequence(-15)) // "-15<0"
console.log(SequenceSum.showSequence(0)) // "0=0"
