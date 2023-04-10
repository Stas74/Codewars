// Recursion 101

/*

In this Kata, you will be given two positive integers a and b and your task will be to apply the following operations:

i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].
a and b will both be lower than 10E8.

More examples in tests cases. Good luck!

*/

function solve(a, b) {
  while (a >= 2 * b || b >= 2 * a) {
    if (a == 0 || b == 0) {
      return [a, b];
    } else if (a >= 2 * b) {
      a = a % (2 * b);
    } else if (b >= 2 * a) {
      b = b % (2 * a);
    }
  }
  return [a, b];
}

console.log(solve(6, 19)); // [6,7]
console.log(solve(2, 1)); // [0,1]
console.log(solve(22, 5)); // [0,1]
console.log(solve(2, 10)); // [2,2]



function solve(a, b) {
  if (a === 0 || b === 0) {
    return [a, b];
  }

  if (a >= 2 * b) {
    a = a % (2 * b);
    return solve(a, b);
  }

  if (b >= 2 * a) {
    b = b % (2 * a);
    return solve(a, b);
  }

  return [a, b];
}



// recursion, iterative process & if-statement
function solve(a,b) {
  if (!a || !b) return [a,b]
  if (a >= 2*b) return solve(a-2*b, b)
  if (b >= 2*a) return solve(a, b-2*a)    
  return [a,b]
}



const solve = (a, b) => 
  !a || !b ? [a, b] : a >= 2 * b ? solve(a - 2 * b, b) : b >= 2 * a ? solve(a, b - 2 * a) : [a, b];



function solve(a, b) {
  while (a && b) {
    if (a >= (2 * b)) {
      a %= 2 * b;
    } else if (b >= (2 * a)) {
      b %= 2 * a;
    } else {
      return [a, b];
    }
  }
  return [a, b];
}



