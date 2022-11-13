// Multiplication table

/*
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

multiplicationTable = function (size) {
  let finArr = [];
  for (let i = 0; i < size; i++) {
    let curr = [];
    for (let j = 0; j < size; j++) {       
      curr.push((j + 1) * (i + 1));
    }
    finArr.push(curr)
  }
  return finArr;
};

console.log(multiplicationTable(3)); // [[1,2,3], [2,4,6], [3,6,9]]





multiplicationTable = function(size) {

  return Array.apply(null, new Array(size)).map(function(val, i) {
    return Array.apply(null, new Array(size)).map(function(val, j) {
      return (i+1) * (j+1);
    });
  });
}



multiplicationTable = function(n) {
  return Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>(i+1)*(j+1)))
}


const multiplicationTable = s => Array(s).fill().map((a, i) => Array(s).fill().map((e, j) => (1 + i) * (1 + j)))
