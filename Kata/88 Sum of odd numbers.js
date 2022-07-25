// Sum of odd numbers

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1)
// e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  // TODO 1 * 2 -> 2 * 3 -> 3 * 4 -> 4 * 5 -> 5 * 6  and after -1
  let firstDigit = n * n - (n - 1);
  let total = 0;
  let count = 0;
  while (count < n) {
    if (firstDigit % 2 !== 0) {
      total += firstDigit;
      count++;
    }
    firstDigit++;
  }
  return total
}

console.log(rowSumOddNumbers(1)); // 1
console.log(rowSumOddNumbers(2)); // 8
console.log(rowSumOddNumbers(42)); // 74088
