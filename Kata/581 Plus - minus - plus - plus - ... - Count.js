// Plus - minus - plus - plus - ... - Count

/*
Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5];


| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |


catchSignChange(arr) == 2;
*/

const catchSignChange = (arr) => {
  let total = 0;
  arr.map((el, i) =>
    (el >= 0 && arr[i + 1] < 0) || (el < 0 && arr[i + 1] >= 0) ? total++ : total
  );
  return total;
};

// arr.reduce((prev, cur, index) => prev + Math.sign(arr[index - 1]) != Math.sign(cur) ? 1 : 0, 0);

console.log(catchSignChange([1, -3, -4, 0, 5])); // 2
console.log(catchSignChange([-47, 84, -30, -11, -5, 74, 77])); // 3




const catchSignChange = function(arr){
  var count=0;
  for (i=0; i<arr.length; i++){
    if ((arr[i]<0 && arr[i+1]>=0) || (arr[i]>=0 && arr[i+1]<0)){
    count++;
    }
  };
  return count;
};



function catchSignChange(arr) {
  return arr.slice(1).filter((e,i) => (e < 0) !== (arr[i] < 0)).length;
}

const catchSignChange = a => a.slice(1).filter((e, i) => (e < 0) !== (a[i] < 0)).length;



const catchSignChange = arr => 
  arr.reduce((pre, val, idx) => idx && pre + (val < 0 !== arr[--idx] < 0), 0);

