// Odd-heavy Array

/*

An array is defined to be odd-heavy if it contains at least one odd element 
and every element whose value is odd is greater than every even-valued element.

eg.

Array [11,4,9,2,8] is odd-heavy,
because its odd elements [11,9] are greater than all the even elements [4,2,8]

Array [11,4,9,2,3,10] is not odd-heavy,
because one of its even elements (10 from [4,2,10]) is greater than two of
its odd elements (9 and 3 from [11,9,3])

Array [] is not odd-heavy,
because it does not contain any odd numbers

Array [3] is odd-heavy,
because it does not contain any even numbers.

write a function called isOddHeavy or is_odd_heavy that accepts an integer array 
and returns true if the array is odd-heavy else return false.

*/

function isOddHeavy(n) {
  const oddArr = n.filter((el) => el % 2 != 0);
  const evenArr = n.filter((el) => el % 2 == 0);
  return oddArr.length > 0 ? Math.max(...evenArr) < Math.min(...oddArr) : false;
}

console.log(isOddHeavy([0, 2, 19, 4, 4])); // true
console.log(isOddHeavy([1, -2, -1, 2])); // false
console.log(isOddHeavy([11, 4, 9, 2, 3, 10])); // false
console.log(isOddHeavy([0, 0])); // false
console.log(isOddHeavy([2])); // false




// O(n) solution
function isOddHeavy(n) {

  let min_odd = Number.MAX_SAFE_INTEGER
  ,  max_even = Number.MIN_SAFE_INTEGER;
  
  for (let m of n)
    if (m % 2)
      min_odd = Math.min(min_odd, m);
    else
      max_even = Math.max(max_even, m);
      
  return min_odd !== Number.MAX_SAFE_INTEGER 
      && min_odd > max_even;
  
}


function isOddHeavy(n){  
  const odds = n.filter(e => e % 2)
  const evens = n.filter(e => !(e % 2))
  
  return !!odds.length && Math.min(...odds) > Math.max(...evens)
}



function isOddHeavy(n){
  let odds = [];
  let evens = [];
  n.forEach(num=>num%2===0? evens.push(num) : odds.push(num));
  if(odds.length>0){
    return Math.min(...odds)>=Math.max(...evens)
  }return false
}



function isOddHeavy(n){
  var even = n.filter(y => y%2==0).sort((a,b) => b-a);
  var odd = n.filter(y => y%2!=0).sort()
  return even=='' ? (odd=='' ? false : true) : odd[0]>even[0];
}
