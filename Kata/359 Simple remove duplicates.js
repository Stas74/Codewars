// Simple remove duplicates

/*
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3

Expected output: [4, 6, 3]
*/

function solve(arr) {
  return [...new Set(arr.reverse())].reverse()
}

console.log(solve([3,4,4,3,6,3])); // [4,6,3]
console.log(solve([1,1,4,5,1,2,1])); // [4,5,2,1]




function solve(arr){
    return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}

