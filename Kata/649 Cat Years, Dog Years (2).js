// Cat Years, Dog Years (2)

/*
I have a cat and a dog which I got as kitten / puppy.

I forget when that was, but I do know their current ages as catYears and dogYears.

Find how long I have owned each of my pets and return as a list [ownedCat, ownedDog]

NOTES:
Results are truncated whole numbers of "human" years

Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that

Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

const cat = (num) => {
  if (num < 15) {return 0;}
  num -= 15;
  if (num < 9) {return 1;}
  num -= 9;
  if (num < 4) {
    return 2;
  } else {
    let total = 3;
    while (num > 0) {
      num -= 4;
      if (num < 4) {
        return total;
      } else {
        total++;
      }
    }
  }
};

const dog = (num) => {
  if (num < 15) {return 0;}
  num -= 15;
  if (num < 9) {return 1;}
  num -= 9;
  if (num < 5) {
    return 2;
  } else {
    let total = 3;
    while (num > 0) {
      num -= 5;
      if (num < 5) {
        return total;
      } else {
        total++;
      }
    }
  }
};

var ownedCatAndDog = function (catYears, dogYears) {
  return [cat(catYears), dog(dogYears)];
};

console.log(ownedCatAndDog(24, 24)); // [2,2]
console.log(ownedCatAndDog(56, 64)); // [10,10]
console.log(ownedCatAndDog(9, 7)); // [0,0]



const ownedCatAndDog = (catYears, dogYears) => [
    (catYears < 24)? catYears / 15 : (catYears - 16) / 4,
    (dogYears < 24)? dogYears / 15 : (dogYears - 14) / 5
    ].map(Math.floor);



const ownedCatAndDog = (...pets) => pets.map((petYears, i) => { 
    if (petYears < 15) return 0;
    if (petYears < 24) return 1;      
    return 2 + Math.floor((petYears - 24) / (4 + i));
});



var ownedCatAndDog = function(cy, dy) {
  let cat = cy < 15 ? 0: cy < 24? 1: 2 + Math.trunc((cy - 24) / 4)
  let dog = dy < 15 ? 0: dy < 24? 1: 2 + Math.trunc((dy - 24) / 5)
  return [cat, dog]
}


let ownedCatAndDog = (c, d) => [c < 15 ? 0 : c < 24 ? 1 : Math.trunc(c / 4 - 4), d < 15 ? 0 : d < 24 ? 1 : Math.trunc((d - 14) / 5)];
