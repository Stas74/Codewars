// Multiply the number

/*
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised 
to the number of digits of each numbers, so, for example:

multiply(3) == 15 // 3 * 5¹
multiply(10) == 250 // 10 * 5²
multiply(200) == 25000 // 200 * 5³
multiply(0) == 0 // 0 * 5¹
multiply(-3) == -15 // -3 * 5¹
*/

function multiply(number) {
  return number * 5 ** String(Math.abs(number)).length;
}

console.log(multiply(10)); // 250
console.log(multiply(5)); // 25
console.log(multiply(200)); // 25000
console.log(multiply(0)); // 0
console.log(multiply(-2)); // -10




function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length);
}



const multiply = number => number * Math.pow(5, (Math.abs(number) + "").length);



function multiply(number){
  //your code here
  let numStr = number.toString().replace("-", "");
  return number* Math.pow(5,numStr.length)
}



function multiply(n) {
  const digCount = Math.floor(Math.log10(Math.abs(n)) + 1) || 1
  return n * 5**digCount
}



