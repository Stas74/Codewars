// Check three and two

/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), 
check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

function checkThreeAndTwo(array) {
  const valArr = ["a", "b", "c"];
  let finArr = valArr.map((e) => array.filter((el) => el == e).length);
  return finArr.sort().join("") == "023";
}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"])); //  true
console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"])); //  false
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"])); //  false





function checkThreeAndTwo(array) {
  const counts = array.reduce((result, letter) => {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
    
    return result;
  }, {});
  
  const containsThree = Object.values(counts).some(x => x === 3);
  const containsTwo = Object.values(counts).some(x => x === 2);
  
  return containsThree && containsTwo;
}




function checkThreeAndTwo(array) {
  let as = array.filter(x =>x === 'a').length;
  let bs = array.filter(x =>x === 'b').length;
  let cs = array.filter(x =>x === 'c').length;
  return (as === 3 || bs === 3 || cs=== 3)  
          && (as === 2 || bs === 2 || cs === 2);
}



const checkThreeAndTwo = array =>
  [2, 3].includes(array.filter(val => val === array[0]).length) && new Set(array).size === 2;


