// Strong Number (Special Numbers Series #2)

/*
Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task
Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

Notes
Number passed is always Positive.
Return the result as String
Input >> Output Examples
strong_num(1) ==> return "STRONG!!!!"
Since, the sum of its digits' factorial (1) is equal to number itself, then its a Strong.

strong_num(123) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself, then it's Not Strong .

strong_num(2)  ==>  return "STRONG!!!!"
Since the sum of its digits' factorial of 2! = 2 is equal to number itself, then its a Strong.

strong_num(150) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself, Then it's Not Strong .
*/

function factorial(num) {
  return num != 0 ? num * factorial(num - 1) : 1;
}

function strong(n) {
  return String(n).split("").map(el => factorial(el)).reduce((prev, cur) => prev + cur, 0) == n ? "STRONG!!!!" : "Not Strong !!";
}

console.log(strong(1)); // "STRONG!!!!"
console.log(strong(145)); // "STRONG!!!!"
console.log(strong(7)); // "Not Strong !!"
console.log(strong(93)); // "Not Strong !!"
console.log(strong(104)); // "Not Strong !!"





function strong(n) {
  let arr = String(n).split("");
  
  let sum = 0;
  
  function factorial(fnNum){
    if(fnNum <= 1){
      return 1;
    }else{
      return fnNum * factorial(fnNum - 1);
    }
  }
  
  for(let i = 0; i < arr.length; i++){
    sum += factorial(arr[i]);
  }
  
  return n == sum ? "STRONG!!!!" : "Not Strong !!"; 
}


const strong = n =>
  [...`${n}`].reduce((pre, val) => pre + [...Array(+val)].reduce((factorial, _, idx) => factorial * ++idx, 1), 0) === n ? `STRONG!!!!` : `Not Strong !!`;



function strong(n) {
  return [1,2,145,40585].includes(n)?'STRONG!!!!':'Not Strong !!';
}
