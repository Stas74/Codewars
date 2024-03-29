// Identical Elements

/*

Given two arrays of integers m and n, test if they contain at least one identical element. 
Return true if they do; false if not.

Your code must handle any value within the range of a 32-bit integer, 
and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).

*/

function duplicateElements(m, n) {
  return m.some((el, i, arr) => arr.includes(n[i]));
}

console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9])); // true
console.log(duplicateElements([9, 8, 7], [8, 1, 3])); // true




function duplicateElements(m, n) {
  return m.some(v => n.includes(v))
}


const duplicateElements = (m, n) =>
  m.some(val => n.includes(val));


const duplicateElements = (arr, arr2) => arr.map(el => arr2.filter(e => e === el).length > 0).includes(true)


const duplicateElements = (a, b) => {
  const c = new Set(a);
  return b.some(x => c.has(x));
};
