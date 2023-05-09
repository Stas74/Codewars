// Possibilities Array

/*

A non-empty array a of length n is called an array of all possibilities 
if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities 
that accepts an integer array and returns true if the array is an array of all possibilities, else false.

Example:

a=[1,2,0,3]
a.length-1=3 
a includes [0,3] ,hence the function should return true

*/

function isAllPossibilities(x) {
  if (x.length == 0) {
    return false;
  }
  for (let i = 0; i < x.length; i++) {
    if (!x.includes(i)) {
      return false;
    }
  }
  return true;
}

console.log(isAllPossibilities([0, 1, 2, 3])); // true
console.log(isAllPossibilities([1, 2, 3, 4])); // false
console.log(isAllPossibilities([])); // false



function isAllPossibilities(x){
	return x.length > 0 ? x.every((a,i) => x.includes(i)) : false;
}


function isAllPossibilities(a) {
  return !!a.length && a.sort().every((x, i) => x === i);
}


const isAllPossibilities = x =>
  !!x.length && x.every((_, idx) => x.includes(idx));


function isAllPossibilities(array) {
  const [first, ...rest] = array.slice().sort();
  return first === 0 && rest.every((n, i) => n === i + 1);
}
