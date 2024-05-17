// Be Concise IV - Index of an element in an array

/*
Be Concise IV - Index of an element in an array

Task
Provided is a function Kata which accepts two parameters in the following order: 
array, element and returns the index of the element if found and "Not found" otherwise. 
Your task is to shorten the code as much as possible in order to meet the strict character count requirements 
of the Kata. (no more than 161) You may assume that all array elements are unique.

function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return "Not found";
}

*/

function find(arr, el) {
  return arr.includes(el) ? arr.indexOf(el) : "Not found"
}


var array = [2,3,5,7,11];
console.log(find(array, 5)); // 2
console.log(find(array, 11)); // 4
console.log(find(array, 1)); // "Not found"
