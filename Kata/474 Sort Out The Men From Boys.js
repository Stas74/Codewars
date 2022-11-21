// Sort Out The Men From Boys

/*
Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys

Notes
Return an array/list where Even numbers come first then odds

Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

Array/list size is at least 4 .

Array/list numbers could be a mixture of positives , negatives .

Have no fear , It is guaranteed that no Zeroes will exists
Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

*/

function menFromBoys(arr) {
  let even = [...new Set(arr)].filter((el) => el % 2 == 0).sort((a, b) => a - b);
  let odd = [...new Set(arr)].filter((el) => el % 2 != 0).sort((a, b) => b - a);
  return even.concat(odd);
}

console.log(menFromBoys([7, 3, 14, 17])); // [14,17,7,3]
console.log(menFromBoys([2, 43, 95, 90, 37])); // [2,90,95,43,37]
console.log(menFromBoys([20, 33, 50, 34, 43, 46])); // [20,34,46,50,43,33]



const menFromBoys = arr => {
  let [evens, odds] = [[], []];
  [...new Set(arr)].sort((a, b) => a - b) .forEach(n => n % 2 ? odds.unshift(n) : evens.push(n));
  return [...evens, ...odds];
};



var menFromBoys = (arr) => [...new Set(arr.filter(e => e % 2 === 0).sort((a,b)=> a-b)),...new Set(arr.filter(e => e % 2).sort((a,b)=>b-a))]


const menFromBoys = arr =>
  [...new Set([...arr.filter(val => !(val % 2)).sort((a, b) => a - b), ...arr.filter(val => val % 2).sort((a, b) => b - a)])];
