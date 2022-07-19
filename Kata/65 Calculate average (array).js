// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
  // your code here
//   let ave = array.reduce((a, b) => a + b, 0) / array.length || 0;
  return array.reduce((a, b) => a + b, 0) / array.length || 0;
}


console.log(find_average([1,1,1])); // 1
console.log(find_average([1,2,3,4])); // 2.5




var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}


function find_average(array) {
  if (array.length === 0) {
  return 0;
  }
  var result = 0;
  for (i=0; i<array.length; i++) {
    result +=array[i];
  }
  return result/array.length;
}


