// Tail Swap

/*
You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle 
(but not at beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), 
but with the characters after each colon swapped.

Examples
["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
*/

function tailSwap(arr) {
  let frArr = arr.map((el) => el.split(":")[0]);
  let reArr = arr.map((el) => el.split(":")[1]);
  return [frArr[0] + ":" + reArr[1], frArr[1] + ":" + reArr[0]];
}

console.log(tailSwap(["abc:123", "cde:456"])); // ['abc:456', 'cde:123']
console.log(tailSwap(["a:12345", "777:xyz"])); // ['a:xyz', '777:12345']
