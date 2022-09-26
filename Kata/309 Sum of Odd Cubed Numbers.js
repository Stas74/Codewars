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





let cubeOdd = (a) => {
  var isNumeric = a.every((x) => !isNaN(x));
  return isNumeric
    ? a.filter((n) => n % 2).reduce((s, n) => s + n * n * n, 0)
    : undefined;
};



function cubeOdd(arr) {
  arr = arr.filter((num) => {return num % 2 != 0});
  arr = arr.reduce((a, b) => a + Math.pow(b, 3), 0);
  return isNaN(arr) ? undefined : arr;
}



const cubeOdd = arr => { 

//Checks if every element in the array doesn't return an undefined value and stores it in a variable
x = arr.every(y => !isNaN(y)) 

//Using the variable to get the element that is not an undefined value, we check if the array has a string in it or has ONLY numbers
//and the number should be a defined value, and the string an undefined value, so we check if it's defined and begin our process
//To remove all even numbers by filtering them and leaving only odd numbers
//Adding all the odd numbers up and cubing them at the same time
//And if there was a string in the array we return undefined
return x ? arr.filter(z => z % 2).reduce((a, b) => a + Math.pow(b, 3), 0) : undefined

}
