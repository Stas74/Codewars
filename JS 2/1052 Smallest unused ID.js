// Smallest unused ID

/*
Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. 
For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!
*/

function nextId(ids) {
  return ids.sort((a, b) => a - b).reduce((prev, cur) => prev + (prev == cur), 0)
}

// let lowNum = Math.min(...ids);
// let maxNum = Math.max(...ids);
// for (let i = 0; i <= maxNum; i++) {
//   if (ids.indexOf(i) == -1) {
//     return i;
//   }
// }
// return maxNum + 1;

console.log(nextId([0, 1, 2, 3, 5])); // 4
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 11
console.log(nextId([1, 2, 0, 2, 3, 5])); // 4

console.log(nextId([5, 3, 3, 4, 9, 6, 8, 3])); // 0




 function nextId(ids){
  var x = 0;
  while (ids.includes(x)) x++;
  return x;
}



function nextId(ids){
	const used = new Set(ids);
  for (let i = 0; i <= ids.length; i++) {
  	if (!used.has(i)) return i;
  }
}



function nextId(ids){
  for (i = 0; i < ids.length; i++) { 
    if (ids.indexOf(i) == -1){
      return i;
    }
  }
  return ids.length;
}



function nextId(ids){
  var i = 0;
  while (ids.includes(i))
  {
    i++;
  }
  return i;
}


const nextId = ids =>
  (val => val < 0 ? Math.max(...ids) + 1 : val)
  (ids.findIndex((_, idx) => !ids.includes(idx)));
