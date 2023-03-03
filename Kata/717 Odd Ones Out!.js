// Odd Ones Out!

/*
The town sheriff dislikes odd numbers and wants all odd numbered families out of town! 
In town crowds can form and individuals are often mixed with other people and families. 
However you can distinguish the family they belong to by the number on the shirts they wear. 
As the sheriff's assistant it's your job to find all the odd numbered families and remove them from the town!

Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. 
Remove all numbers that repeat an odd number of times while keeping everything else the same.

oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]
In the above example:

the number 1 appears twice
the number 2 appears once
the number 3 appears three times
2 and 3 both appear an odd number of times, so they are removed from the list. The final result is: [1,1]

Here are more examples:

oddOnesOut([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
oddOnesOut([1, 2, 3]) = []
oddOnesOut([1]) = []
*/

function oddOnesOut(nums) {
  const obj = {};
  nums.map((el) => (obj[el] ? (obj[el] += 1) : (obj[el] = 1)));
  return nums.filter((e) => obj[e] % 2 == 0);
}

console.log(oddOnesOut([1, 2, 3, 1, 3, 3])); // [1, 1]
console.log(oddOnesOut([75, 68, 75, 47, 68])); // [75, 68, 75, 68]
console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67])); // [67, 67]



function oddOnesOut(nums) {
  return nums.filter(n => nums.filter(x => x === n).length % 2 === 0);
}



function oddOnesOut(a) {
  let d = a.reduce((x, y) => (x[y] = (x[y] || 0) + 1, x), {});
  return a.filter(x => d[x] % 2 === 0);
}



const oddOnesOut = ($) => $.filter(e => $.filter(el => el === e).length % 2 === 0)


const oddOnesOut = nums =>
  nums.filter(val => !(nums.filter(v => v === val).length % 2));
