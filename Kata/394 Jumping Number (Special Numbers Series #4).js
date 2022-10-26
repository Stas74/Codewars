// Jumping Number (Special Numbers Series #4)

/*
Jumping number is the number that All adjacent digits in it differ by 1.

Task
Given a number, Find if it is Jumping or not .
*/

function jumpingNumber(n) {
  let arr = String(n).split("").map((el => +el)); 
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) != 1) {
      return "Not!!"
    }      
  }
  return "Jumping!!"
}

console.log(jumpingNumber(8987)); // "Jumping!!"
console.log(jumpingNumber(8981)); // "Not!!"



const jumpingNumber = n => n.toString().split``.every((e, i, a) => i < 1 || Math.abs(e - a[i - 1]) === 1) ? 'Jumping!!' : 'Not!!';

