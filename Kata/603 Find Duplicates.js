// Find Duplicates

/*
Given an array, find the duplicates in that array, and return a new array of those duplicates. 
The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

Examples
[1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
[0, 1, 2, 3, 4, 5]                ==>  []
*/

function duplicates(arr) {
  let filtered = arr.filter((item, index) => arr.indexOf(item) !== index)
  return [...new Set(filtered)]
}
// [...new Set(arr)]

// function findDuplicates(arr) {
//   const distinct = new Set(arr);        // для повышения производительности
//   const filtered = arr.filter(item => {
//       // удаляем элемент из набора при первой же встрече
//       if (distinct.has(item)) {
//           distinct.delete(item);
//       }
//       // возвращаем элемент при последующих встречах
//       else {
//           return item;
//       }
//   });

//   return [...new Set(filtered)]
// }


console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"])); // [4, 3, 1]
console.log(duplicates([0, 1, 2, 3, 4, 5])); // []



function duplicates(arr) {
  return arr.reduce(function(prev, cur, i, a) {
    if (i !== a.indexOf(cur) && prev.indexOf(cur) === -1) {
      prev.push(cur);
    }
    return prev;
  }, []);
}



const duplicates = arr => arr.filter((v, i) => arr.indexOf(v) !== i && arr.lastIndexOf(v) === i);

