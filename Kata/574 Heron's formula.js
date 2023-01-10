// Heron's formula

/*
Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).

Heron's formula:

s∗(s−a)∗(s−b)∗(s−c)\sqrt{s * (s - a) * (s - b) * (s - c)} 
s∗(s−a)∗(s−b)∗(s−c)
​
 
where

s=a+b+c2s = \frac{a + b + c} 2s= 
2
a+b+c
​
 
Output should have 2 digits precision.
*/


function heron(a, b, c) {
  let s = (a + b + c) / 2;
  return (s * (s - a) * (s - b) * (s - c)) ** 0.5;
}

console.log(heron(3, 4, 5)); // 6
console.log(heron(6, 8, 10)); // 24




function heron(a, b, c) {
  return Math.sqrt((s = (a + b + c) / 2) * (s - a) * (s - b) * (s - c));
}



function heron(a, b, c) {
  let s = (a + b + c) / 2;  
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}