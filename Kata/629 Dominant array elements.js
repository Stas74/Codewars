// Dominant array elements

/*
An element in an array is dominant if it is greater than all elements to its right. 
You will be given an array and your task will be to return a list of all dominant elements. 

For example:

solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included. All numbers will be greater than 0.
*/

function solve(arr) {
  const finArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > Math.max(...arr.slice(i + 1))) {
      finArr.push(arr[i]);
    }
  }
  return finArr;
}

console.log(solve([16, 17, 14, 3, 14, 5, 2]));  // [17,14,5,2]
console.log(solve([1, 21, 4, 7, 5]));  // [21,7,5]



function solve(arr){
  return arr.filter((e, i)=> arr.slice(i + 1).every(x => x < e));
};



function solve(arr){
  return arr.filter((n, i)=>n > Math.max(...arr.slice(i + 1)));
};



const solve = (arr) => arr.filter((el,i)=> el > Math.max(...arr.slice(i+1)))


const solve = arr =>
  arr.filter((val, idx) => val > Math.max(...arr.slice(++idx)));
