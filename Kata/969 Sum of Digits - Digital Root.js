// Sum of Digits / Digital Root

/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. 
The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digitalRoot(n) {
  while (String(n).length > 1) {
    n = String(n)
      .split("")
      .reduce((prev, cur) => prev + +cur, 0);
  }
  return n;
}

console.log(digitalRoot(16)); // 7
console.log(digitalRoot(456)); // 6




function digital_root(n) {
  return (n - 1) % 9 + 1;
}



function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}



function digital_root(n) {
  if (n < 10)
    return n;
  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);   
  return digital_root(sum);
}



function digital_root(n){
    n = eval(n.toString().split('').join('+'));
    if (n > 9) {
        return digital_root(n);
    }
    return n;
}


function digital_root(n) {
  return --n % 9 + 1;
}
