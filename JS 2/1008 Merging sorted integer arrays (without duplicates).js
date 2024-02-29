// Merging sorted integer arrays (without duplicates)

/*
Write a function that merges two sorted arrays into a single one. 
The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
*/

function mergeArrays(a, b) {
  return [...new Set([...a, ...b])].sort((a,b) => a - b);
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays([2, 4, 8], [2, 4, 6])); // [2, 4, 6, 8]



function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a, b) => a - b);
}



function mergeArrays(a, b) {
    let merge = [...a, ...b].sort()
    let unique = new Set(merge)
    return Array.from(unique).sort((a,b)=> a-b)
}



function mergeArrays(a, b) {
  const array = [...a, ...b].sort((a,b) => a-b)
  const answer = array.filter((item, index) => array.indexOf(item) === index)  
  return answer
}




function mergeArrays(a, b) {
 return [...a,...b].sort((a,b)=> a - b).filter ((elem,i,x)=> i == x.indexOf(elem))
}



