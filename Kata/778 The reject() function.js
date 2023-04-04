// The reject() function

/*
Implement a function which filters out array values which satisfy the given predicate.

reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]
*/

function reject(array, predicate) {
  return array.filter((el) => !predicate(el));
}

console.log(
  reject([1, 2, 3, 4, 5, 6], function (num) {
    return num % 2 == 0;
  })
); // [1, 3, 5]



function reject(array, iterator) {
	return array.filter(function(x){ if(!iterator(x)) return x; });
}


const not = f => x => !f(x);
const reject = (arr, f) => arr.filter(not(f));



