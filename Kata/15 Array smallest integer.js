// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

function findSmallestInt(args) {
  args.sort((a, b) => {
    return a - b;
  });
  // console.log(args[0]);
  return args[0];
}

// const numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers);

findSmallestInt([78, 56, 232, 12, 8]); // 8
findSmallestInt([78, 56, 232, 12, 18]); // 12


