// Powers of i

/*
i is the imaginary unit, it is defined by i² = −1, therefore it is a solution to x²+1 = 0.

Your Task
Complete the function pofi that returns iii to the power of a given non-negative integer in its simplest form, 
as a string (answer may contain iii).
*/

function pofi(n) {
  return ["1", "i", "-1", "-i"][n % 4];
}

console.log(pofi(0)); // '1'
console.log(pofi(1)); // 'i'
console.log(pofi(2)); // '-1'
