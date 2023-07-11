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




function diagonal(matrix){
  let pd = 0, sd = 0;
  for (let i = 0; i < matrix.length; i++) {
    pd += matrix[i][i];
    sd += matrix[i][matrix.length-i-1];
  }
  if (pd > sd) return "Principal Diagonal win!";
  else if (sd > pd) return "Secondary Diagonal win!";
  return "Draw!";
}


const diagonal = matrix => ["Secondary Diagonal win!", "Draw!", "Principal Diagonal win!"][
    1 + Math.sign(matrix.reduce((a, b, i) => a + b[i] - b[b.length - 1 - i], 0))];



const sumDiagonals = (sum, row, i) => sum + row[i] - row[row.length - i - 1];
const diagonal = (matrix) => [
  'Secondary Diagonal win!',
  'Draw!',
  'Principal Diagonal win!'
][Math.sign(matrix.reduce(sumDiagonals, 0)) + 1];



const diagonal = matrix =>
  (val => !val ? `Draw!` : `${val > 0 ? `Principal` : `Secondary`} Diagonal win!`)
  (matrix.reduce((pre, _, idx) => pre + matrix[idx][idx] - matrix[idx][matrix.length - ++idx], 0));



function diagonal(matrix) {
  const p = matrix.map((cur, ind) => cur[ind]).reduce((acc, cur) => acc + cur);
  const s = matrix.map((cur, ind, arr) => cur[arr.length - ind - 1]).reduce((acc, cur) => acc + cur);
  
  return p > s ? 'Principal Diagonal win!' : p < s ? 'Secondary Diagonal win!' : 'Draw!';
}


