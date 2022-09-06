// JavaScript Array Filter

/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). 
Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

function getEvenNumbers(numbersArray){
  return numbersArray.filter( val => val % 2 === 0)
}

console.log(getEvenNumbers([1,2,3,6,8,10]));  // [2,6,8,10]
console.log(getEvenNumbers([12,14,15]));  // [12,14]




function getEvenNumbers(numbersArray){
  return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy
}



function isEven(num){
  return num%2==0
}

function getEvenNumbers(numbersArray){
  // filter out the odd numbers
  var filtered = numbersArray.filter(isEven);
  return filtered;
}
