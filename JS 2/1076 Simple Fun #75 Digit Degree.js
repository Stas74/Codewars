// Simple Fun #75: Digit Degree

/*
Let's define digit degree of some positive integer as the number of times we need to replace this number 
with the sum of its digits until we get to a one digit number.

Given an integer n, find its digit degree.

Example
For n = 5, the output should be 0;

For n = 100, the output should be 1;

For n = 91, the output should be 2.

Input/Output
[input] integer n

Constraints: 5 ≤ n ≤ 109.

[output] an integer
*/

function digitDegree(n) {
  let counter = 0;
  while (n > 9) {
    counter++;
    n = (n + "").split("").reduce((acc, cur) => acc + +cur, 0);
  }
  return counter;
}

console.log(digitDegree(5)); // 0
console.log(digitDegree(100)); // 1
console.log(digitDegree(91)); // 2
console.log(digitDegree(99)); // 2
console.log(digitDegree(1234567)); // 3
console.log(digitDegree(1000000000)); // 1



const digitDegree = n =>
  n < 10 ? 0 : 1 + digitDegree([...`${n}`].reduce((pre, val) => pre + +val, 0));


function digitDegree(n, count=0) {
  while(n>9){
    n = +n.toString().split('').reduce((s, v) => s + +v, 0);
    count++;
  }
  return count;
}



function digitDegree(n) {
  var r=0
  while(n>9) r++,n=sum(n)
  return r
  
  function sum(n){
    return (n+"").split("").reduce((a,b)=>a+ +b,0)
  }
}


// recursion

function digitDegree(n) {
  if (n < 10) return 0
  n = [...n+''].reduce((s,i) => s + +i, 0)
  return 1 + digitDegree(n)
}


function digitDegree(n) {
  return n < 10 ? 0 : 1 + digitDegree([...(n + "")].reduce((s, n) => s + +n, 0));
}


const digitDegree = num =>
  num < 10 ? 0 : 1 + digitDegree([...`${num}`].reduce((acc, dgt) => acc + +dgt, 0));


function digitDegree(n) {
  let c=0;
  while((n+'').length>1){
    n = +[...n+''].reduce((a,c) => a+ +c,0);
    c++;
  } return c;
}
