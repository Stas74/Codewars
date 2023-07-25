// Number climber

/*
For every positive integer N, there exists a unique sequence starting with 1 and ending with N 
and such that every number in the sequence is either the double of the preceeding number or the double plus 1.

For example, given N = 13, the sequence is [1, 3, 6, 13], because . . . :

 3 =  2*1 +1
 6 =  2*3
 13 = 2*6 +1

Write a function that returns this sequence given a number N. 
Try generating the elements of the resulting list in ascending order, i.e., 
without resorting to a list reversal or prependig the elements to a list.
*/

function climb(n) {
  let finArr = [];
  while (n > 0) {
    if (n % 2 == 0) {
      finArr.push(n);
      n /= 2;
    } else {
      finArr.push(n);
      n = (n - 1) / 2;
    }
  }
  return finArr.reverse();
}

// let finArr = [1];
// if (n == 1) {
//   return finArr;
// }
// n % 2 == 0 ? finArr.push(2) : finArr.push(3);
// while (finArr[finArr.length - 1] < n) {
//   if (finArr[finArr.length - 1] % 2 == 0) {
//     finArr.push(finArr[finArr.length - 1] * 2 + 1);
//   } else {
//     finArr.push(finArr[finArr.length - 1] * 2);
//   }
// }
// return finArr;

console.log(climb(1)); // [1]
console.log(climb(10)); // [1, 2, 5, 10]
console.log(climb(13)); // [1, 3, 6, 13]
console.log(climb(100)); // [1, 3, 6, 12, 25, 50, 100]
