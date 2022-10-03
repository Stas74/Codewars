//  esreveR


/*
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/

reverse = function(array) {
  let finArr = []
  for (let i = array.length - 1; i >= 0; i--) {
    finArr.push(array[i]);    
  }
  return finArr
}



console.log(reverse([1,2,3]))  // [3,2,1]
console.log(reverse([1,null,14,"two"]))  // ["two",14,null,1]
