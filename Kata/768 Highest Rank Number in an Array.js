// Highest Rank Number in an Array

/*
Complete the method which returns the number which is most frequent in the given input array. 
If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

*/

function highestRank(arr) {
  let obj = {};
  arr.map((el) => (obj[el] ? (obj[el] += 1) : (obj[el] = 1)));
  obj = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  const highestSecondNum = obj[0][1];
  let answer = 0;
  obj.forEach((element) => {
    if (element[1] == highestSecondNum && answer < +element[0]) {
      answer = +element[0];
    }
  });
  return answer;
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])); // 12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10])); // 12



function highestRank(arr) {
  return arr.sort(
    (a, b) =>
      arr.filter((i) => i === b).length - arr.filter((i) => i === a).length
  )[0];
}


function highestRank(arr){
  var obj = {};
  arr.forEach(function(elem){
     if(obj[elem] === undefined)
       obj[elem] = 0;
     obj[elem]++;
  });
  var keys = Object.keys(obj), highest = 0, key;
  keys.forEach(function(elem){
     if(obj[elem] >= highest)
     {
        highest = obj[elem];
        key = elem;
     }
  })
  return parseInt(key);
}



function highestRank(arr) {
  var high,
    max = 0,
    rec = {};
  for (var x of arr) {
    rec[x] = (rec[x] || 0) + 1;
    if (rec[x] > max) {
      max = rec[x];
      high = x;
    }
  }
  return high;
}



const highestRank = arr =>
  arr.sort((a, b) => arr.filter(val => val === b).length - arr.filter(val => val === a).length || b - a)[0];



const highestRank = arr => {
    let nums = {};
    arr.forEach(el => {
        nums[el] ? nums[el]++ : nums[el] = 1
    })   
    return +Object.keys(nums).reduce((a, b) => nums[a] > nums[b] ? a : b);
}
