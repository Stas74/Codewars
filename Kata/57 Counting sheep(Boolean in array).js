// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
  let counter = 0;
  for (let elem of arrayOfSheep) {
    if (elem) {
      counter++;
    }
  }
  return counter;
}

var array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];

console.log(countSheeps(array1)); // 17




function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}


let countSheeps = x => x.filter( s => s ).length;


function countSheeps(arrayOfSheep) {
  var array = arrayOfSheep.reduce((a,b)=>a + (b===true?1:0),0)
  return array;
}



function countSheeps(arrayOfSheep) {
  var count = 0;  
  arrayOfSheep.forEach( function (sheep) {
    if (sheep)
      count++;
  });  
  return count;
}

