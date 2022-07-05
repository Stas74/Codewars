// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
  // moment of truth
  if ((flower1 + flower2) % 2 !== 0) {
    //     console.log("true");
    return true;
  } else {
    //     console.log("false");
    return false;
  }
}

lovefunc(1, 4); // true
lovefunc(2, 2); // false



// function lovefunc(flower1, flower2){
//   return flower1 % 2 !== flower2 % 2;
// }


// function lovefunc(flower1, flower2){
//   return (flower1 + flower2) % 2 === 1
// }

