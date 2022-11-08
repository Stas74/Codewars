// Persistent Bugger

/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

function persistence(num) {
  const multiplication = (n) =>
    String(n)
      .split("")
      .reduce((prev, cur) => prev * cur, 1);
  
  let counter = 0;
  while (String(num).length > 1) {
    num = multiplication(num);
    counter++;
  }
  return counter;
}

console.log(persistence(39)); // 3
console.log(persistence(999)); // 4


function persistence(num) {
   for (var i = 0; num > 9; i++) {
     num = num.toString().split('').reduce((t, c) => c * t);
   }
   return i;
}



const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
}


persistence=(n,c) => n > 9 ? persistence(n.toString().split('').reduce((x,y)=>x*y),c?(c+1):1):c?c:0


function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}


