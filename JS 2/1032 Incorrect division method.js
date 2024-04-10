// Incorrect division method

/*
This method, which is supposed to return the result of dividing its first argument by its second, 
isn't always returning correct values. Fix it.

const solve = (x, y) => x // y
*/

const solve = (x, y) => x / y;

console.log(solve(2, 1)); // 2
console.log(solve(2, 4)); // 0.5
