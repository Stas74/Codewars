// Calculate Two People's Individual Ages

/*
Create a function that takes in the sum and age difference of two people, 
calculates their individual ages, and returns a pair of values (oldest age first) 

if those exist or null/None if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative
*/

function getAges(sum, difference) {
  if (sum < 0 || difference < 0) {
    return null;
  }
  const age1 = (sum + difference) / 2;
  const age2 = age1 - difference;
  return age1 < 0 || age2 < 0 ? null : [age1, age2];
}

console.log(getAges(24, 4)); // 14, 10
console.log(getAges(63, -14)); // null
