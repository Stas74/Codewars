// What dominates your array?

/*
A zero-indexed array arr consisting of n integers is given. 
The dominator of array arr is the value that occurs in more than half of the elements of arr.
For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. 
The function should return −1 if array does not have a dominator. 
All values in arr will be >=0.
*/

function dominator(arr) {
  let finObj = {};
  arr.map((el) => (finObj[el] ? finObj[el]++ : (finObj[el] = 1)));
  for (const key in finObj) {
    if (finObj[key] > arr.length / 2) {
      return +key;
    }
  }
  return -1;
}

console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3])); // 3
console.log(dominator([1, 2, 3, 4, 5])); // -1
console.log(dominator([1, 1, 1, 2, 2, 2])); // -1
console.log(dominator([1, 1, 1, 2, 2, 2, 2])); // 2



function dominator(arr) {
  arr.sort();
  for (var i = 0, v = 0, c = 0; i < arr.length; i++) {
     if (v == arr[i]) c++;
     else { 
       v = arr[i];
       c = 1;
     }
     if (c > arr.length / 2) return v;
  }
  return -1;
}



function dominator(arr) {
  for (let i = 0, obj = {}; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
    if (obj[arr[i]] > arr.length / 2) return arr[i];
  }
  return -1;
}



const dominator = arr =>
  (obj => arr.find(val => obj[val] > arr.length / 2) || -1)
  (arr.reduce((pre, val) => (pre[val] = -~pre[val], pre), {}));



// Boyer's algorithm
// Learn more about it here:
// https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm

const dominator = (a) => {
  let possibleMajority = null,
    counter = 0;
  for (const e of a)
    if (possibleMajority === null) {
      possibleMajority = e;
      counter = 1;
    } else if (e === possibleMajority) ++counter;
    else if (counter === 0) {
      possibleMajority = e;
      counter = 1;
    } else --counter;
  if (2 * a.filter((e) => e === possibleMajority).length <= a.length) return -1;
  return possibleMajority;
};
