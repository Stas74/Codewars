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
