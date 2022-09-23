// Divide and Conquer

/*
Given a mixed array of number and string representations of integers, 
add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
*/

function divCon(x) {
  // let numArr = x.filter(val => typeof(val) == "number")
  // let strArr = x.filter(val => typeof(val) == "string")
  // console.log(numArr.reduce((prev, cur) => prev + (+cur), 0))
  // console.log(strArr.reduce((prev, cur) => prev + (+cur), 0))
  return x.reduce((prev, cur) => typeof(cur) == "number" ? prev + cur : prev - (+cur), 0)
}
  
console.log(divCon([9, 3, '7', '3']))  // 2
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]))  // 14
