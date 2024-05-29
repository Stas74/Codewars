// Squeaky Window

/*
Your function takes in parameter an array of integers nums and a strictly-positive integer k.

Imagine a sliding window of size k which is moving from left to right in the array. 
You can only see the k elements that are in the window. 
The sliding window moves right by one position until it is no longer possible to have k elements in the window. 
You have to return an array of the maximums for each successive window, from left to right.

Detailed Example:

Given nums = [1,3,-1,-3,5,3,6,7], and k = 3:

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7      3
1 [3  -1  -3] 5  3  6  7       3
1  3 [-1  -3  5] 3  6  7       5
1  3  -1 [-3  5  3] 6  7       5
1  3  -1  -3 [5  3  6] 7       6
1  3  -1  -3  5 [3  6  7]      7

(nums = [1,3,-1,-3,5,3,6,7], k = 3) ---> [3, 3, 5, 5, 6, 7]

More examples:

(nums = [1, 2, 3, 4], k = 1) ---> [1, 2, 3, 4]
(nums = [1, 2, 3, 4], k = 2) ---> [2, 3, 4]
(nums = [1, 2, 3, 4], k = 3) ---> [3, 4]
(nums = [1, 2, 3, 4], k = 4) ---> [4]
(nums = [1, 2, 3, 4], k = 5) ---> [] because k is larger than the length of nums

*/

function sliding(nums, k) {
  let finArr = [];
  for (let i = 0; i <= nums.length - k; i++) {
    finArr.push(Math.max(...nums.slice(i, i + k)));
  }
  return finArr;
}

console.log(sliding([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3, 3, 5, 5, 6, 7]




function sliding(nums, k) {
  k--;
  return nums.reduce((t, x, i) => {
    if (i >= k) {
      t.push(Math.max(...nums.slice(i - k, i + 1)));
    }
    return t;
  }, []);
}



function sliding(a, k) {
  return a.length ? Array.from({length: a.length - k + 1}, (x, i) => Math.max(...a.slice(i, i + k))) : [];
}



// IIFE & NFE & recursion

function sliding(arr, k) {
  return function f({length:l}){
    if (!l | l < k) return []
    return [Math.max(...arr.slice(0, k)), ...f((arr.splice(0, 1), arr))]
  }(arr)
}



const sliding = (nums, k) => nums.length ? Array.from({ length: nums.length - k + 1 }, (_, i) => Math.max(...nums.slice(i, i + k))) : [];



