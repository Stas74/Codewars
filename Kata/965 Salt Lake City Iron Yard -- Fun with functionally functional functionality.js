// Salt Lake City Iron Yard -- Fun with functionally functional functionality

/*
This kata should be able to take an array of numbers, square each item, 
filter out odd numbers, and return the remaining even numbers sum. 
if Array contains an element which is not number return undefined.
*/

function fSquared(arr) {
  return arr.every((el) => !isNaN(el))
    ? arr.reduce(
        (prev, cur) => prev + ((cur * cur) % 2 == 0 ? cur * cur : 0),
        0
      )
    : undefined;
}

// return arr.every((el) => !isNaN(el))
//     ? arr
//         .map((e) => e * e)
//         .reduce((prev, cur) => prev + (cur % 2 == 0 ? cur : 0), 0)
//     : undefined;

console.log(fSquared([5, 10, 15, 20])); // 500
console.log(fSquared(["a", 1, 2, "c", 3])); // undefined
