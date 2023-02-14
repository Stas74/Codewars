// Max-min arrays

/*
In this Kata, you will be given an array of unique elements, 
and your task is to rearrange the values so that the first max value is followed by the first minimum, 
followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.
*/

function solve(arr) {  
  return [...Array(arr.sort((a, b) => a - b).length)].map((el, idx) => idx % 2 ?  arr.shift(el) : arr.pop(el));
}

console.log(solve([15, 11, 10, 7, 12])); // [15,7,12,10,11]



function solve(arr){
  var minMax = [];
  arr.sort((a,b)=>a-b);
  for(var i = 0, j = arr.length-1; i <= j; i++,j--){
    if(i != j) minMax.push(arr[j]), minMax.push(arr[i]);
    else minMax.push(arr[i]);
  }
  return minMax;
}



const solve = arr =>
  [...Array(arr.sort((a, b) => a - b).length)].map((_, idx) => idx % 2 ? arr.shift() : arr.pop());



function solve(arr, ar = arr.sort((a, b)=> b - a)){
  let ind = Math.ceil(arr.length/2)
  arr = ar.slice(0, ind)
  ar = ar.slice(ind).reverse()
  return [].concat(...arr.map((_,i)=> ar[i] ? [arr[i], ar[i]] : [arr[i]]))
};



