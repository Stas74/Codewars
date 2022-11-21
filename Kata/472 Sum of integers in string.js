// Sum of integers in string

/*
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. 
For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.
*/

function sumOfIntegersInString(s) {
  let total = 0;
  let numStr = "";
  for (const char of s) {
    if (Number.isInteger(+char)) {
      numStr += char;
    } else {
      total += +numStr;
      numStr = "";
    }
  }
  total += +numStr; // final add, if last char is number
  return total;
}
// console.log(Number.isInteger(+char))

console.log(sumOfIntegersInString("12.4")); // 16
console.log(sumOfIntegersInString("h3ll0w0rld")); // 3
console.log(sumOfIntegersInString("2 + 3 = ")); // 5




function sumOfIntegersInString(s) {
  return (s.match(/\d+/g) || []).reduce((s, n) => s + +n, 0);
}



function sumOfIntegersInString(s){
return s.replace(/\D/gi,' ')
        .split(" ")
        .map(value=>Number(value))
        .reduce((a,b)=>a+b); 
}



function sumOfIntegersInString(s){
  const searchNumber = s.split(/[^0-9]/gi)
  let total = 0
  for (let i = 0; i < searchNumber.length; i++) {
    total += Number(searchNumber[i])
  }
  return total
}
