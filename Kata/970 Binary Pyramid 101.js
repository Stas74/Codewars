// Binary Pyramid 101

/*
Given two numbers m and n, such that 0 ≤ m ≤ n :

convert all numbers from m to n (inclusive) to binary
sum them as if they were in base 10
convert the result to binary
return as a string
Example
1, 4  -->  1111010

because:
    1  // 1 in binary is 1
+  10  // 2 in binary is 10
+  11  // 3 in binary is 11
+ 100  // 4 in binary is 100
-----
  122  // 122 in binary is 1111010
*/

function binaryPyramid(m, n) {
  const finArr = [];
  while (m <= n) {
    finArr.push(m.toString(2));
    m++;
  }
  return finArr.reduce((prev, cur) => prev + +cur, 0).toString(2);
}

console.log(binaryPyramid(1, 4)); // "1111010"
console.log(binaryPyramid(1, 6)); // "101001101"




function BinaryPyramid(m, n) {
  let sm = 0;
  for (let i = m; i <= n; i++)     
     sm += parseInt(i.toString(2));  
  return sm.toString(2);
}



function BinaryPyramid(m,n){
  return [...Array(n-m+1)].reduce((a,b,i)=>a+ +(m+i).toString(2),0).toString(2);
}



const BinaryPyramid = (m, n) => Array.from( {length:n-m+1}, (_,i) => (i + m).toString(2) ).reduce((acc, el) => acc + +el, 0).toString(2)



const BinaryPyramid = (m, n) => Array(n - m + 1)
  .fill(0)
  .map((_, i) => m + i)
  .reduce((s, n) => s + +n.toString(2), 0)
  .toString(2);



const BinaryPyramid = (m, n) => Array.from(Array(n - m + 1), (_, i) => i + m).map(i => +i.toString(2)).reduce((a, b) => a + b, 0).toString(2)
