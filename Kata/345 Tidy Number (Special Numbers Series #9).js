// Tidy Number (Special Numbers Series #9)

/*
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .
*/

function tidyNumber(n) {
  return (
    String(n) ===
    String(n)
      .split("")
      .sort((a, b) => a - b)
      .join("")
  );
}

console.log(tidyNumber(12)); // true
console.log(tidyNumber(102)); // false
console.log(tidyNumber(2789)); // true
console.log(tidyNumber(9672)); // false




function tidyNumber(n){
  return [...n + ''].sort().join('') == n;
}

