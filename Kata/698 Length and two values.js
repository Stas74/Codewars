// Length and two values

/*
Given an integer n and two other values, build an array of size n filled with these two values alternating.

Examples
5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
Good luck!
*/

function alternate(n, firstValue, secondValue) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(firstValue, secondValue);
  }
  return arr.slice(0, n);
}

console.log(alternate(5, true, false)); // [true, false, true, false, true]
console.log(alternate(6, "blue", "red")); // ['blue', 'red', 'blue', 'red', 'blue', 'red']



function alternate(n, firstValue, secondValue){
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i % 2 === 0 ? firstValue : secondValue)
  }
  return array;
}


function alternate(n, firstValue, secondValue){
  return Array.from({length: n}, (_, i) => i % 2 === 0 ? firstValue : secondValue);
}


const alternate = (n, a, b) => n ? [a, ...alternate(n-1, b, a)] : [];


function alternate(n, firstValue, secondValue) {
  let arr = [];
  while (arr.length < n) {
    arr.push(firstValue, secondValue);
  }
  if (arr.length > n) {
    arr.pop();
  }
  return arr;
}



alternate=(n, f, s)=>[...Array(n)].map((_, i) => i & 1 ? s : f)
