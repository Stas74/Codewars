// Sum of Odd Cubed Numbers

/*
Find the sum of the odd numbers within an array, after cubing the initial integers. 
The function should return undefined if any of the values aren't numbers.
*/

function cubeOdd(arr) {   
  const areNumbers = arr.every(element => typeof element === 'number')
  if (!areNumbers) return undefined
  return arr.filter(v => v % 2 !== 0).reduce((prev, cur) => prev + Math.pow(cur, 3), 0)
}

console.log(cubeOdd([1, 2, 3, 4])); // 28
console.log(cubeOdd([-3, -2, 2, 3])); // 0
console.log(cubeOdd(["a", 12, 9, "z", 42])); // undefined
