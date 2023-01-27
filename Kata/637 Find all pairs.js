// Find all pairs

/*
You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:

- Array can be empty or contain only one value; in this case return 0
- If there are more pairs of a certain number, count each pair only once. 
  E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
- Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

Examples:

[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)
*/

function duplicates(array) {
  const finObj = {};
  array.map(el => finObj[el] ? finObj[el] += 1 : finObj[el] = 1); 
  const filteredArr = Object.values(finObj).filter(e => e > 1)
  return filteredArr.reduce((prev, cur) => prev + (cur % 2 != 0 ? (cur - 1) / 2  : cur / 2), 0);
}

console.log(duplicates([1, 2, 5, 6, 5, 2])); // 2
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])); // 4
console.log(duplicates([0, 0, 0, 0, 0, 0, 0])); // 3




function duplicates(array) {
  let res = 0, odd = new Set();
  for (let x of array) {
    if (odd.delete(x))
      res++;
    else
      odd.add(x);
  }
  return res;
  
  
  
function duplicates(array) {
  const newArray = array.sort((a, b) => a - b);
  if (newArray.length <= 1) return 0;
  let count = 0;
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] == newArray[i + 1]) {
      count++;
      i++;
    }
  }
  return count;
}


  
const duplicates = a => (a.sort((x,y)=>x-y).join('_').match(/(?<=_|^)(\d+)_\1(?=_|$)/g)||[]).length



const duplicates = array => {
  let numberOf = array.reduce((acc,c) => (acc[c] = (acc[c] ||0) + 1, acc), {});
  return Object.values(numberOf).reduce((acc,c) => acc + Math.floor(c / 2), 0);
};
  
 
  
const duplicates = array =>
  array.reduce((pre, val) => pre[0].delete(val) ? [pre[0], ++pre[1]] : [pre[0].add(val), pre[1]], [new Set(), 0])[1];
  
