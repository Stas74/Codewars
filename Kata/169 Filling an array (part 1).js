// Filling an array (part 1)

/*
We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]
Note: The parameter is optional. So you have to give it a default value.
*/

const arr = N => { 
  let finArr = [];
  for (let i = 0; i < N; i++) {
    finArr.push(i);    
  }
  return finArr
};


console.log(arr(4)) // [0,1,2,3]




const arr = n => Array.from({length: n}, (_, i) => i);


arr = n => n ? [...Array(n).keys()] : [];
