// Math engine

/*
Given an array of integers.

Return a number that is the sum of

The product of all the non-negative numbers
The sum of all the negative numbers

Edge cases

If there are no non-negative numbers, assume the product of them to be 1.
Similarly, if there are no negative numbers, assume the sum of them to be 0.
If the array is null, result should be 0.

For example:
mathEngine([1, 2, 3, -4, -5]) // should return -3
*/

function mathEngine(arr) {
  return arr === null
    ? 0
    : arr.reduce((prev, cur) => prev * (cur >= 0 ? cur : 1), 1) +
        arr.reduce((prev, cur) => prev + (cur < 0 ? cur : 0), 0);
}

console.log(mathEngine([1, 2, 3, -4, -5])); // -3
console.log(mathEngine([2])); // 2
console.log(mathEngine([-5])); // -4
console.log(mathEngine([0, -5])); // -5




const mathEngine = (array) => array === null ? 0 : array.filter(el => el < 0).reduce((a, b)=> a + b, 0) + array.filter(el => el > -1).reduce((a, b)=> a * b, 1)



function mathEngine(arr) {
    return (arr)?
        arr.filter(x => x >= 0).reduce((a, b) => a * b, 1) +
        arr.filter(x => x < 0).reduce((a, b) => a + b, 0) :
        0;
}



const mathEngine = a => a === null ? 0 : a.reduce((p, x) => (x < 0 ? p[0] += x : p[1] *= x, p), [0, 1]).reduce((a, b) => a + b);



function mathEngine(arr) {  
  if (!arr)
    return 0;
  
  let prod = 1;
  let sum = 0;
  
  for (let num of arr)
    if (num >= 0) 
      prod *= num;
    else
      sum += num;
  return prod + sum;  
}
