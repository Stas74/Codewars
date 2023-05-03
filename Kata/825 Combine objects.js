// Combine objects

/*

Your task is to write a function that takes two or more objects and returns a new object 
which combines all the input objects.

All input object properties will have only numeric values. 
Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

The combine function should be a good citizen, so should not mutate the input objects.

*/

function combine(...objs) {
  return objs.reduce((a, b) => {
    for (let k in b) {
      if (b.hasOwnProperty(k)) a[k] = (a[k] || 0) + b[k];
    }
    return a;
  }, {});
}

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

console.log(combine(objA, objB)); // { a: 13, b: 20, c: 36, d: 3 }
console.log(combine(objA, objC)); // {  a: 15, b: 20, c: 30, d: 11, e: 8 }



const combine = (...params) => params.reduce((a, b) => {
  for (const x in b) { a[x] = x in a ? a[x] + b[x] : b[x] };
  return a;
 }, {});



function combine() {
  var obj = {}
  for (var i = 0; i < arguments.length; i++) {
        for (var key in arguments[i]) {
          obj[key] = obj[key] ? obj[key] + arguments[i][key]: arguments[i][key]
        }
  }
  return obj;
}



function combine() {
    let result = {};
    for (let obj of arguments) {
        for (let property in obj) {
            if (property in result) {
                result[property] += obj[property];
            } else {
                result[property] = obj[property];
            }
        }
    }
    return result;
}



const combine = (...args) =>
  args.reduce((pre, val) => (Object.keys(val).forEach(v => pre[v] = (pre[v] || 0) + val[v]), pre), {});


