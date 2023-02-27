// Replace all items

/*
Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.

Python / JavaScript: The function has to work for strings and lists.

Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]

replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]
*/

function replaceAll(seq, find, replace) {
  return typeof seq == "string"
    ? seq.split("").map((el) => (el == find ? replace : el)).join("")
    : seq.map((el) => (el == find ? replace : el));
}
// const re = new RegExp(find, 'g');
// return typeof(seq) == "string" ? seq.replace(re, replace) : seq.map((el) => (el == find ? replace : el));

console.log(replaceAll([1, 2, 2], 1, 2)); // [2,2,2]
console.log(replaceAll("122", 1, 2)); // [2,2,2]
