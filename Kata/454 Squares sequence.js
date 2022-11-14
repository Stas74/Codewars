// Squares sequence

/*
Complete the function that returns an array of length n, starting with the given number x 
and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
*/

function squares(x, n) {
  let finArr = [];
  if (n <= 0) {
    return finArr
  }
  finArr.push(x)
  for (let i = 1; i < n; i++) {
    finArr.push(finArr[i - 1] ** 2)    
  }
  return finArr
}

console.log(squares(2,5)); // [2,4,16,256,65536]
console.log(squares(3,3)); // [3,9,81]
console.log(squares(2,0)); // []



function squares(x, n) {
  return Array.from({length: n}, (v, k) => Math.pow(x, Math.pow(2, k)))
}


function squares(x, n) {
  var ret = [];
  for(var i=0; i<n; i++){
    ret.push(x);
    x*= x;
  }
  return ret;
}


function squares(x, n) {
  let arr = [];
  if(n === 0 || n < 0) return arr;
  for(let i = x; arr.length < n; i*=i) {
      arr.push(i);
  }
  return arr
}


const squares = (x, n) =>
  [...Array((n > 0) * n)].map((_, idx) => x ** 2 ** idx);
