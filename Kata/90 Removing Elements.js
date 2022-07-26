// Removing Elements

// Take an array and remove every second element from the array.
// Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i])
  }
  return result
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9]
console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"])); // ['Hello', 'Hello Again']



function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}



const removeEveryOther = arr => arr.filter((_, i) => !(i % 2));



function removeEveryOther(arr){
  //your code here
  for (var i = 1; i < arr.length;i++){
      arr.splice(i,1);
  }
  return arr;
}



