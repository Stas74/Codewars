// Larger Product or Sum

/*

For this Kata you will be given an array of numbers and another number n. 
You have to find the sum of the n largest numbers of the array and the product of the n smallest numbers 
of the array, and compare the two.

If the sum of the n largest numbers is higher, return "sum"
If the product of the n smallest numbers is higher, return "product"
If the 2 values are equal, return "same"

Note The array will never be empty and n will always be smaller than the length of the array.

Example
sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3) // => "product"

Explanation
The sum of the 3 highest numbers is 41 + 36 + 20 = 97

The product of the lowest 3 numbers is 8 x 9 x 10 = 720

The product of the 3 lowest numbers is higher than the sum of the 3 highest numbers so the function returns "product"

*/

function sumOrProduct(array, n) {
  const arrMax = array.sort((a, b) => a - b).slice(-n);
  const totalMax = arrMax.reduce((prev, cur) => prev + cur, 0);
  const arrMin = array.sort((a, b) => a - b).slice(0, n);
  const totalMin = arrMin.reduce((prev, cur) => prev * cur, 1);
  return totalMax > totalMin
    ? "sum"
    : totalMax == totalMin
    ? "same"
    : "product";
}

console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)); // "sum"
console.log(sumOrProduct([10, 41, 8, 16, 20, 36, 9, 13, 20], 3)); // "product"
console.log(sumOrProduct([10, 20, 3, 30, 5, 4], 3)); // "same"




const sumOrProduct = (arr, n) => {
  const sorted = arr.sort((a, b) => a - b);
  const sum = sorted.slice(-n).reduce((acc, i) => acc + i);
  const product = sorted.slice(0, n).reduce((acc, i) => acc * i, 1);
  return sum > product ? 'sum' : sum < product ? 'product' : 'same';
}



const sumOrProduct = (array, n) =>
  (([p, s]) => p > s ? `product` : p < s ? `sum` : `same`)
  (array.sort((a, b) => a - b).reduce(([p, s], val, idx) => [p * (idx < n ? val : 1), s + (idx >= array.length - n && val)], [1, 0]));



function sumOrProduct(arr, n) {
    const sum = arr.sort((a, b) => b - a).reduce((s, a, i) => i < n ? s + a : s, 0);
    const pro = arr.sort((a, b) => a - b).reduce((s, a, i) => i < n ? s * a : s, 1);
    return pro > sum ? "product" : sum > pro ? "sum" : "same"    
}
