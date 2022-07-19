// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not,
// so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers.
// The numbers will also all be unique and in ascending order.
// The numbers could be positive or negative and the first non-consecutive could be either too!

// Can you write a solution that will return null2 for both [] and [ x ] though?
// (This is an empty array and one with a single number and is not tested for,
//   but you can write your own example test. )

function firstNonConsecutive(arr) {
  if (arr.length < 2) {
    return null;
  } else {
    let previous = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - previous !== 1) {
        return arr[i];
      }
      previous = arr[i];
    }
  }
  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // 6



function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }
  }
  return null
}



function firstNonConsecutive (arr) {
    let result = arr.find((val, index) => val !== index + arr[0]);

    return (Number.isInteger(result)) ? result : null;
}


firstNonConsecutive = arr => arr.length == 1 ? null : arr[0] + 1 != arr[1] ? arr[1] : firstNonConsecutive(arr.slice(1)) 
