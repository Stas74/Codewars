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
