// Parts of a list

/*
Write a function partlist that gives all the ways to divide a list (an array) of at least two elements 
into two non-empty parts.

- Each two non empty parts will be in a pair 
(or an array for languages without tuples or a structin C - C: see Examples test Cases - )
- Each part will be in a string
- Elements of a pair must be in the same order as in the original array.

a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], 
["az toto picaro zone", "kiwi"]] 
*/

function partlist(arr) {
  let finArr = [];
  for (let i = 1; i < arr.length; i++) {
    finArr.push([arr.slice(0, i).join(" "), arr.slice(i).join(" ")]);
  }
  return finArr;
}

// console.log(arr.slice(0, 1))
// console.log(arr.slice(1))
// console.log(arr.slice(0, 2))
// console.log(arr.slice(2))
// console.log(arr.slice(0, 3))
// console.log(arr.slice(3))

console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"]));
// [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]]
