// Unique string characters

/*
In this Kata, you will be given two strings a and b and your task will be to return 
the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 

Notice also that you return the characters from the first string concatenated with those from the second string.
*/

function solve(a, b) {
  return  a.split("").map(el => !b.includes(el) ? el : "").concat(b.split("").map(el => !a.includes(el) ? el : "")).join("")
}

// let str = "";
// a.split("").map(el => !b.includes(el) ? str += el : str += "")
// b.split("").map(el => !a.includes(el) ? str += el : str += "")
// return str


console.log(solve("xyab", "xzca")); // "ybzc"
console.log(solve("xyabb","xzca")); // "ybbzc"
console.log(solve("xxx","xzca")); // "zca"




function solve(a,b){
 return (a+b).split("").filter(c => !a.includes(c) || !b.includes(c)).join("");
};


function solve(a,b,c =''){
  c = [...a].filter(e => !b.includes(e)).join('')
  b = [...b].filter(e => !a.includes(e)).join('')
  return c + b
};



function solve(a,b) {
  let setA = new Set(a);
  let setB = new Set(b);
  return [...(a+b)].filter(c => setA.has(c) ^ setB.has(c)).join("");
};
