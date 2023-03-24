// Sum a list but ignore any duplicates

/*
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/

function sumNoDuplicates(numList) {
  return numList.reduce(
    (prev, cur) =>
      prev + (numList.indexOf(cur) == numList.lastIndexOf(cur) ? cur : 0),
    0
  );
}
// return numList.filter(el => numList.indexOf(el) == numList.lastIndexOf(el));

console.log(sumNoDuplicates([1, 1, 2, 3])); // 5
console.log(sumNoDuplicates([1, 1, 2, 2, 3])); // 3
console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1])); // 21



function sumNoDuplicates(arr) {
        let uniqueArr = [];
        let sum = 0;
        arr.forEach(num => {
            if (arr.indexOf(num) === arr.lastIndexOf(num)) {
                uniqueArr.push(num);
                sum += num;
            }
        });
        return sum;
}



function sumNoDuplicates(numList) {
  const uniqueArr = numList.filter(
    (num, index) =>
      numList.indexOf(num) === index && numList.lastIndexOf(num) === index
  );
  return uniqueArr.reduce((x, y) => x + y, 0);
}



function sumNoDuplicates(numList) {
  return numList.filter((i)=> numList.indexOf(i) == numList.lastIndexOf(i)).reduce((a,b)=> a + b, 0)
}



function sumNoDuplicates(numList) {
  const seen = new Set();
  const duplicate = new Set();
  numList.forEach(e => {
    if(seen.has(e)) duplicate.add(e);
    else seen.add(e);
  });
  return [...seen].filter(e => !duplicate.has(e)).reduce((a,b) => a + b, 0);
}
