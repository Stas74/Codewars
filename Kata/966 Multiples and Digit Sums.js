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




function procedure(n){
  let out = 0, max = 100;
  
  while ( max >= n ) {
    if ( Number.isInteger(max / n) ){
      const multiple = n * max / n;
      out += [...String(multiple)].reduce((acc, el)=> acc + +el, 0)
    }
    max -= 1;
  } 
  return out
}



const procedure = n => {
  const arr = [];  
  for (let i = 0; i <= 100; i += n) {
    arr.push(i)
  }  
  return arr.join('').split('').reduce((acc, curr) => +acc + +curr);
}



function procedure(i) {
  let arr = [];
  for (let j = 1; j <= 100; j++) {
    if (j % i === 0) {
      arr.push(j);
    }
  }
  let x = arr.map((el) =>
    el
      .toString()
      .split("")
      .reduce((e, cur) => Number(e) + Number(cur))
  );
  let sum = x.reduce((ele, curr) => Number(ele) + Number(curr));
  return sum;
}



function procedure(n) {
  let [result, num] = [0, n];
  while ( n <= 100 ) {
    let min = n;
    while ( min > 0 ) {
      result += min % 10;
      min = min / 10 | 0;
    }
    n += num;
  }
  return result;
}



const procedure = (n) =>
  Array.from({length: Math.round(100/n)}, (_,i)=> n * (i+1) < 101 ? n * (i+1) : 0)
  .map(String).map(el => [...el].reduce((ac, e) => ac + Number(e), 0)).reduce((a,b)=> a + b)




function procedure(n){
  let i = 1;
  let resultArr = [];
  while ((100 / n) >= i) {
    let check = (n * i).toString().split('').reduce((acc, curr) => (+acc) + (+curr), 0);
    resultArr.push(check);
    i++;
  }
  return resultArr.reduce((acc, curr) => acc + curr, 0);
}
