// Convert Hash To An Array

/*
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically by key name.
*/

function convertHashToArray(hash) {
  return Object.entries(hash).sort()
}

// let finArr = [];
// console.log(hash)
// for (const item of hash) {
//   console.log(hash[item])
//   // finArr.push(Object.keys(item), Object.values(item))
// }
// return finArr // [Object.keys(hash), Object.values(hash)];

console.log(convertHashToArray({ name: "Jeremy", age: 24 })); // [["age", 24], ["name", "Jeremy"]]
console.log(convertHashToArray({ product: "CodeWars", powerLevelOver: 9000 })); 
// [["powerLevelOver", 9000], ["product", "CodeWars"]]
