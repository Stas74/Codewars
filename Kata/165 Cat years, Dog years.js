// Cat years, Dog years

/*
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only

Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that

Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

var humanYearsCatYearsDogYears = function(humanYears) { 
  return humanYears === 1 ? [humanYears, 15, 15] : humanYears === 2 ? [humanYears, 24, 24] : [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
}

console.log(humanYearsCatYearsDogYears(1)) // [1,15,15]
console.log(humanYearsCatYearsDogYears(2)) // [2,24,24]
console.log(humanYearsCatYearsDogYears(10)) // [10,56,64]





const humanYearsCatYearsDogYears = humanYears => [
  humanYears,
  ( humanYears - 1 ? 16 : 11 ) + 4 * humanYears,
  ( humanYears - 1 ? 14 : 10 ) + 5 * humanYears,
];



function humanYearsCatYearsDogYears(humanYears) {
  switch (humanYears) {
    case 1:
      return [1, 15, 15]
    case 2:
      return [2, 24, 24];
    default:
      return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
  }
  
}
