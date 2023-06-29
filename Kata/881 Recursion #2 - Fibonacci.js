// Recursion #2 - Fibonacci

/*
This is a kata series that you can only solve using recursion.
##2 - Fibonacci number

In mathematical terms, the sequence f(n) of fibonacci numbers is defined by the recurrence relation

f(n) = f(n-1) + f(n-2)

with seed values

f(1) = 1 and f(2) = 1

#Your task

You have to create the function fibonacci that receives n and returns f(n). You have to use recursion.
*/

const fibonacci = (n) => {
  return n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
};

// if (n < 3) {
//   return 1;
// } else {
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5



var cache = { 1 : 1, 2 : 1}
const fibonacci = n => cache[n] || (cache[n] = fibonacci(n - 1) + fibonacci(n - 2))


const fibonacci = n => {
  return (n <= 2) ? 1 : fibonacci(n - 2) + fibonacci(n - 1);
};


const fibonacci = n => 2 < n ? fibonacci(n-1) + fibonacci(n-2) : 1;


const fibonacci = n =>
  n > 2 ? fibonacci(--n) + fibonacci(--n) : 1;
