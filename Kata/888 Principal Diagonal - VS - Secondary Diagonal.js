// Principal Diagonal | VS | Secondary Diagonal

/*
Principal Diagonal -- 
The principal diagonal in a matrix identifies those elements of the matrix running from North-West to South-East.

Secondary Diagonal -- 
the secondary diagonal of a matrix identifies those elements of the matrix running from North-East to South-West.

For example:

matrix:             [1, 2, 3]
                    [4, 5, 6]
                    [7, 8, 9]

principal diagonal: [1, 5, 9]
secondary diagonal: [3, 5, 7]

Task
Your task is to find which diagonal is "larger": which diagonal has a bigger sum of their elements.

If the principal diagonal is larger, return "Principal Diagonal win!"
If the secondary diagonal is larger, return "Secondary Diagonal win!"
If they are equal, return "Draw!"

Note: You will always receive matrices of the same dimension.
*/

const arrSum = (arr) =>
  arr.map((el, i) => el[i]).reduce((prev, cur) => prev + cur, 0);

function diagonal(matrix) {
  return arrSum(matrix) == arrSum(matrix.reverse())
    ? "Draw!"
    : (arrSum(matrix) < arrSum(matrix.reverse()) ? "Principal" : "Secondary") +
        " Diagonal win!";
}

console.log(
  diagonal([
    [2, 2, 2],
    [4, 2, 6],
    [1, 8, 2],
  ])
); // 'Principal Diagonal win!'

console.log(
  diagonal([
    [1, 2, 2, 5, 1],
    [4, 1, 6, 1, 1],
    [1, 8, 5, 6, 2],
    [1, 5, 2, 1, 2],
    [1, 8, 2, 6, 1],
  ])
); // 'Secondary Diagonal win!'

console.log(
  diagonal([
    [2, 2, 2],
    [4, 2, 6],
    [2, 8, 2],
  ])
); // "Draw!"
