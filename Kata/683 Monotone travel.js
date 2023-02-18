// Monotone travel

/*
Peter lives on a hill, and he always moans about the way to his home. "It's always just up. I never get a rest". 
But you're pretty sure that at least at one point Peter's altitude doesn't rise, but fall. 
To get him, you use a nefarious plan: you attach an altimeter to his backpack and you read the data from his way 
back at the next day.

Task
You're given a list of compareable elements:

heights = [h1, h2, h3, …, hn]
Your job is to check whether for any x all successors are greater or equal to x.

isMonotone([1,2,3]) == true
isMonotone([1,1,2]) == true
isMonotone([1])     == true
isMonotone([3,2,1]) == false
isMonotone([3,2,2]) == false
If the list is empty, Peter has probably removed your altimeter, so we cannot prove him wrong and he's still right:

isMonotone([])     == True
Such a sequence is also called monotone or monotonic sequence, hence the name isMonotone.
*/

var isMonotone = function (arr) {
  let sorted = arr.map((el) => el).sort((a, b) => a - b);
  return arr.join("") == sorted.join("");
};

console.log(isMonotone([1, 2, 3])); // true
console.log(isMonotone([1, 1, 3])); // true
console.log(isMonotone([3, 2, 1])); // false



var isMonotone = function(arr){
  return arr.every(function(x, idx) {
    return idx === 0 ? true : arr[idx] >= arr[idx-1];
  });
}



var isMonotone = function(arr){
  for(var i=0;i<arr.length-1;i++) {
    if(arr[i] > arr[i+1] ) return false;
  }
  return true; // << change this
}


const isMonotone = $ => $.slice(1).some((e,i) => e < $[i]) ? false : true


const isMonotone = arr =>
  !arr.some((val, idx) => val < arr[--idx]);
