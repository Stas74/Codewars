// Integer Difference

/*
Write a function that accepts two arguments: an array/list of integers and another integer (n).

Determine the number of times where two integers in the array have a difference of n.

For example:

[1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
[1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)
*/

const intDiff = (arr, n) => {
  let counter = 0;
  for (let i = 1; i < arr.length; i++) {
    arr.slice(i)
      .map((el) =>
        Math.abs(arr[i - 1] - el) == n ? (counter += 1) : (counter += 0)
      );
  }
  return counter;
};

console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4)); // 3
console.log(intDiff([1, 1, 3, 3], 2)); // 4



const intDiff = (arr, n) => {
  let count = 0;
  for(let i=1; i<arr.length; i++)
    for(let j=0; j<i; j++)
        if (Math.abs(arr[i]-arr[j]) === n) count++;
  return count;
}



const intDiff = (arr, n) => 
  arr.reduce((pre, val, idx) => pre + arr.slice(++idx).filter(v => Math.abs(v - val) === n).length, 0);



const intDiff = function(arr, n){
  let [ out, k ] = [ [], 0 ]
  for ( const i of arr ){
    out = out.concat( arr.slice(++k).filter(el => Math.abs(el - i) === n ))
  }
  return out.length;
}



const intDiff = ([first, ...rest], n, count = 0) => rest.length ? intDiff(rest, n, count + rest.reduce((a, v) => a + (Math.abs(first - v) == n), 0)) : count;


