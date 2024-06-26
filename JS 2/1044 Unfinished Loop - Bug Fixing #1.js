// Unfinished Loop - Bug Fixing #1

/*
Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number;){
    newArray.push(counter);
  }
  
  return newArray;
}

*/

function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

console.log(createArray(1)); // [1]
console.log(createArray(2)); // [1,2]
console.log(createArray(3)); // [1,2,3]




const createArray = n => Array(...Array(n)).map((v, i) => i + 1);



function createArray(number){
  return Array.from({length:number},(v,i)=>i+1)
}



const createArray = number =>
  [...Array(number)].map((_, idx) => ++idx);



