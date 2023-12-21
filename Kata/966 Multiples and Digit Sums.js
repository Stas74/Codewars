// Multiples and Digit Sums

/*
In this exercise, you will create a function that takes an integer, i. With it you must do the following:

Find all of its multiples up to and including 100,

Then take the digit sum of each multiple (eg. 45 -> 4 + 5 = 9),

And finally, get the total sum of each new digit sum.

Note: If the digit sum of a number is more than 9 (eg. 99 -> 9 + 9 = 18) 
then you do NOT have to break it down further until it reaches one digit.

Example (if i is 25):

Multiples of 25 up to 100 --> [25, 50, 75, 100]

Digit sum of each multiple --> [7, 5, 12, 1]

Sum of each new digit sum --> 25

If you can, try writing it in readable code.
*/

function procedure(n) {
  let finArr = [];
  counter = n;
  while (counter <= 100) {
    finArr.push(counter);
    counter += n;
  }
  return finArr
    .map((el) =>
      String(el)
        .split("")
        .reduce((prev, cur) => prev + +cur, 0)
    )
    .reduce((p, c) => p + c, 0);
}

console.log(procedure(25)); // 25
console.log(procedure(30)); // 18
