// Enumerable Magic - Does My List Include This?

/*
Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
*/

function include(arr, item){
  return arr.includes(item)
}


console.log(include([1,2,3,4], 3))  // 'true'
console.log(include([1,2,4,5], 3))  // 'false'




function include(arr, item) {
  return arr.indexOf(item) !== -1;
}


