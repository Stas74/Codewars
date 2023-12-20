// Salt Lake City Iron Yard -- Fun with functionally functional functionality

/*
This kata should be able to take an array of numbers, square each item, 
filter out odd numbers, and return the remaining even numbers sum. 
if Array contains an element which is not number return undefined.
*/

function fSquared(arr) {
  return arr.every((el) => !isNaN(el))
    ? arr.reduce(
        (prev, cur) => prev + ((cur * cur) % 2 == 0 ? cur * cur : 0),
        0
      )
    : undefined;
}

// return arr.every((el) => !isNaN(el))
//     ? arr
//         .map((e) => e * e)
//         .reduce((prev, cur) => prev + (cur % 2 == 0 ? cur : 0), 0)
//     : undefined;

console.log(fSquared([5, 10, 15, 20])); // 500
console.log(fSquared(["a", 1, 2, "c", 3])); // undefined




function fSquared (arr) {
  return arr.every(isNumber) ? arr.map(square).filter(even).reduce(sum) : undefined;
  
  function isNumber(a) {
    return typeof a === 'number';
  }
  
  function square(n) {
    return n * n;
  }
  
  function even(n) {
    return n % 2 === 0;
  }
  
  function sum(c, p) {
    return c + p;
  }
};



fSquared=(arr)=>arr.filter((a)=>typeof a!="number").length==0?arr.map((b)=>b*b).filter((c)=>c%2==0).reduce((d,e)=>d+e,0):undefined;



function fSquared (arr) {
  let sum = 0;
  for (var i = 0; i < arr.length ; i++) {
    if (isNaN(arr[i])) {
      return undefined;
    }
    if ((arr[i] % 2) === 0) {
      sum += arr[i] * arr[i];
    }
  }
      return sum;
};




const fSquared = (arr) => arr.some(item => typeof item != 'number') ? undefined : arr.map(item => item**2).filter(item => item % 2 === 0).reduce((a,c) => a + c, 0)




function fSquared (arr) {
    let res = arr.reduce(function(sum, elem) {
        if (elem % 2 === 0) {
            return sum += elem**2; 
        } else if (typeof elem == "string") {
            return undefined;
        }
        return sum;
    },0)
    return res;
};




function fSquared (arr) {
  return arr.some(e => (/[a-z]/g).test(e)) ? undefined : 
  arr.map(e => e * e).filter(e => e % 2 == 0).reduce((a, c) => a + c)
};



