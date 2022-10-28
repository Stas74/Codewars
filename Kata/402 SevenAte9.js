// SevenAte9

/*
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"
*/

function sevenAte9(str) {
  return str.split("").map((el, index) => el == "9" && str[index - 1] == "7" && str[index + 1] == "7" ? '' : el).join("")
}

console.log(sevenAte9('797')); // "77"
console.log(sevenAte9('7979797')); // "7777"
console.log(sevenAte9('165561786121789797')); // "16556178612178977"
