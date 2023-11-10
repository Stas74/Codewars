// Remove duplication

/*
Write a function that accepts an array of number as parameter, and it returns array after removing all duplicated numbers.

Example removeDuplication([1,2,3,2,4,6,2,6,7]) Output [1,3,4,7].

Here 2,6 are duplicated in array, so we should remove all numbers that are duplicated. 
The output will be 1,3,4,7 after removing 2,6.

Input : [1,2,1,2,1,1,2,2] , Output : [].

Input : [2,5,6,7,5,2,6] , Output: [7].
*/

function removeDuplication(arr) {
  finArr = [];
  uniqArr = [...new Set(arr)];
  uniqArr.map((el) => {
    if (arr.indexOf(el) == arr.lastIndexOf(el)) finArr.push(el);
  });
  return finArr.filter((el) => el != undefined);
}

console.log(removeDuplication([1, 2, 3, 2, 4, 6, 2, 6, 7])); // [1,3,4,7]
console.log(removeDuplication([1, 2, 1, 2, 1, 1, 2, 2])); // []
console.log(removeDuplication([2, 5, 6, 7, 5, 2, 6])); // [7]
