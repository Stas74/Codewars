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



function tailSwap(arr) {
  let newArr = arr.map(string => string.split(':'))
  return [newArr[0][0] + ':' + newArr[1][1], newArr[1][0] + ':' + newArr[0][1]];
}



function tailSwap(arr) {
  const [aa, ab] = arr[0].split(":")
  const [ba, bb] = arr[1].split(":")
  return [`${aa}:${bb}`, `${ba}:${ab}`]
}



tailSwap = a => (a+"").replace(/(.+:)(.+),(.+:)(.+)/,"$1$4,$3$2").split(",")



tailSwap = ([a,b],[c,d] = a.split`:`, [e,f]=b.split`:`) => [[c,f].join`:`,[e,d].join`:`]



const tailSwap = arr =>
  `${arr}`.replace(/(.+:)(.+),(.+:)(.+)/, `$1$4,$3$2`).split(`,`);



