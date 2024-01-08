// Happy Birthday, Darling!

/*
As you may know, once some people pass their teens, they jokingly only celebrate their 20th or 21st birthday, 
forever. 
With some maths skills, that's totally possible - you only need to select the correct number base!

For example, if they turn 32, that's exactly 20 - in base 16... Already 39? That's just 21, in base 19!

Your task is to translate the given age to the much desired 20 (or 21) years, 
and indicate the number base, in the format specified below.

Note: input will be always > 21

Examples:
32  -->  "32? That's just 20, in base 16!"
39  -->  "39? That's just 21, in base 19!"
Hint: if you don't know (enough) about numeral systems and radix, just observe the pattern!
*/

function womensAge(n) {
  return `${n}? That's just ${20 + (n % 2)}, in base ${Math.floor(n / 2)}!`;
}

console.log(womensAge(32)); // "32? That's just 20, in base 16!"
console.log(womensAge(39)); // "39? That's just 21, in base 19!"
console.log(womensAge(22)); // "22? That's just 20, in base 11!"




function womensAge(n) {
  let alternativeAgeBase = Math.floor(n/2);
  let alternativeAge = n%2? 21: 20;
  
  return `${n}? That\'s just ${alternativeAge}, in base ${alternativeAgeBase}!`;
}



const womensAge = ($) => $ % 2 ? `${$}? That's just 21, in base ${Math.floor($ / 2)}!` : `${$}? That's just 20, in base ${Math.floor($ / 2)}!` 



const womensAge = n =>
  `${n}? That's just 2${n % 2}, in base ${n / 2 ^ 0}!`;



function womensAge(n) {
  return `${n}? That's just ${20 + n % 2}, in base ${~~(n / 2)}!`;
}



const womensAge = (n) =>
  n +
  "? That's just " +
  (20 + (n % 2)) +
  ", in base " +
  (10 + (n - (20 + (n % 2))) / 2) +
  "!";



const womensAge = (n) => `${n}? That's just ${20 + n % 2}, in base ${n / 2 | 0}!`;
