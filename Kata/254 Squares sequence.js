// Squares sequence

/*
Complete the function that returns an array of length n, starting with the given number x 
and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
*/

function squares(x, n) {
  let finArr = [];
  if (n <= 0) {
    return finArr
  }
  finArr.push(x)
  for (let i = 1; i < n; i++) {
    finArr.push(finArr[i - 1] ** 2)    
  }
  return finArr
}

console.log(squares(2,5)); // [2,4,16,256,65536]
console.log(squares(3,3)); // [3,9,81]
console.log(squares(2,0)); // []
