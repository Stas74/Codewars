// last digits of a number

/*
Your job is to implement a function which returns the last D digits of an integer N as a list.

Special cases:
If D > (the number of digits of N), return all the digits.
If D <= 0, return an empty list.
Examples:
N = 1
D = 1
result = [1]

N = 1234
D = 2
result = [3, 4]

N = 637547
D = 6
result = [6, 3, 7, 5, 4, 7]
*/

function lastDigit(n, d) {
  return d <= 0 ? [] : String(n).slice(-d).split("").map(el => +el);
}

console.log(lastDigit(1, 1)); // [1]
console.log(lastDigit(123767, 4)); // [3,7,6,7]
console.log(lastDigit(1234, 0)); // []



function lastDigit(n, d) {
  const nums = String(n).split('').map(Number);
  const len = nums.length;
  let index = 0;
  return nums.filter(el => index++ >= len - d);
}


function lastDigit(n, d) {
  return (n + '').split('').splice(-d,d).map(Number)
}



function lastDigit(n, d) {
  return d <= 0 ? [] : [...""+n].slice(-d).map(x => +x)
}
