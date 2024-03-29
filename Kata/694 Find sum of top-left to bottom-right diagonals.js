// Find sum of top-left to bottom-right diagonals

/*
Given a square matrix (i.e. an array of subarrays), 
find the sum of values from the first value of the first array, 
the second value of the second array, the third value of the third array, and so on...

Examples
array = [[1, 2],
         [3, 4]]

diagonal sum: 1 + 4 = 5
array = [[5, 9, 1, 0],
         [8, 7, 2, 3],
         [1, 4, 1, 9],
         [2, 3, 8, 2]]

diagonal sum: 5 + 7 + 1 + 2 = 15
*/

function diagonalSum(matrix){
  return matrix.reduce((prev, cur, idx) => prev + cur[idx], 0);
}

console.log(diagonalSum([[12]])); // 12
console.log(diagonalSum([[1, 2], [3, 4]])); // 5
console.log(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 15



function diagonalSum(matrix){
  var sum = 0;  
  for(var i = 0, width = matrix.length; i < width; i++) {
    sum += matrix[i][i];
  }  
  return sum;
}


const diagonalSum = m => m.map((e, i) => e[i]).reduce((r, e) => r + e, 0);
