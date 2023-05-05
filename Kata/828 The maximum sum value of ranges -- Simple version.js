// The maximum sum value of ranges -- Simple version

/*

Given an array arr that contains some integers(positive, negative or 0), 
and a range list such as [[start1,end1],[start2,end2],...], 
start and end are the index of arr and start always less than end. 
Your task is to calculate the sum value of each range (start index and end index are both inclusive), 
and return the maximum sum value.

For example:

 Given arr = [1,-2,3,4,-5,-4,3,2,1], 
       range = [[1,3],[0,4],[6,8]]
 should return 6
 
 calculation process:
 range[1,3] = arr[1]+arr[2]+arr[3] = 5
 range[0,4] = arr[0]+arr[1]+arr[2]+arr[3]+arr[4] = 1
 range[6,8] = arr[6]+arr[7]+arr[8] = 6
 So the maximum sum value is 6
Note:
arr/$a always has at least 5 elements;
range/$range/ranges always has at least 1 element;
All inputs are valid;
This is a simple version, if you want some challenge, please try the challenge version.
Some Examples
 maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3],[0,4],[6,8]]) === 6
 maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,3]]) === 5
 maxSum([1,-2,3,4,-5,-4,3,2,1],[[1,4],[2,5]]) === 0

*/

function maxSum(arr, range) {
  return Math.max(...range.map(el => arr.slice(el[0], el[1] + 1).reduce((prev, cur) => prev + cur, 0)));
}

console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3], [0, 4], [6, 8]])); // 6
console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1], [[1, 3]])); // 5
console.log(maxSum([1, -2, 3, 4, -5, -4, 3, 2, 1],[[1, 4], [2, 5]])); // 0




function maxSum(arr,range){
  var max=-Infinity;
  for (var i=0; i<range.length; ++i)
  {
    var s=0;
    for (var j=range[i][0]; j<=range[i][1]; ++j)
      s+=arr[j];
    if (s>max)
      max=s;
  }
  return max
}



const maxSum = (arr, range, sum = 0) => (
  rest => range.reduce((max, [i, j]) => 
  	Math.max(rest[j + 1] - rest[i], max)
  , -Infinity)
)([0].concat(arr.map(e => sum += e)));



function maxSum(arr, ranges) {
  let sum = arr.slice();
  for (let i = 1; i < arr.length; ++i) {
    sum[i] += sum[i - 1];
  }
  
  return ranges.reduce((ans, range) => {
    return Math.max(
      ans,
      sum[range[1]] - sum[range[0]] + arr[range[0]]
    );
  }, -Infinity);
}



