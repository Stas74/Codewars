// Fibonacci's FizzBuzz


/*
The goal of this kata is two-fold:

1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.

2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, 
and those divisible by both 3 and 5 with FizzBuzz.

For the sake of this kata, you can assume all input will be a positive integer.

Use Cases
Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.

Examples

Input:
fibsFizzBuzz(5)

Output:
[ 1, 1, 2, 'Fizz', 'Buzz' ]

Input:
fibsFizzBuzz(1)

Output:
[1]

Input:
fibsFizzBuzz(20)

Output:
[1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]

##Good Luck!##
*/

function fibsFizzBuzz(n) {
  let finArr = [1, 1];
  for (let i = 2; i < n; i++) {
    finArr.push(finArr[i - 2] + finArr[i - 1]);
  }
  return n == 1 ? [1] : finArr.map((fibNum) =>
    fibNum % 3 === 0 && fibNum % 5 === 0
      ? "FizzBuzz"
      : fibNum % 3 === 0
      ? "Fizz"
      : fibNum % 5 === 0
      ? "Buzz"
      : fibNum
  );
}

console.log(fibsFizzBuzz(1)); // [ 1 ]
console.log(fibsFizzBuzz(2)); // [ 1, 1 ]
console.log(fibsFizzBuzz(5)); // [ 1, 1, 2, 'Fizz', 'Buzz' ]




function fibsFizzBuzz(n) {
  let res = [], [a, b] = [0, 1];
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
    res.push(a % 15 == 0 ? 'FizzBuzz' :
      a % 3 == 0 ? 'Fizz' : a % 5 == 0 ? 'Buzz' : a);
  }
  return res;
}



function fibsFizzBuzz(n) {
    var a = 0;
    var b = 1;
    var res = [1];
    for(var i = 1;i < n; i++) {
        var b_ = b;
        var b = a + b;
        var a = b_;
        res.push(fizzBuzz(b));
    }
    return res;
}

function fizzBuzz(n) {
    if(n % 15 == 0) { return "FizzBuzz"; } 
    if(n % 5 == 0)  { return "Buzz"; }
    if(n % 3 == 0)  { return "Fizz"; }
    return n;
}




const fibsFizzBuzz = n =>
  n < 2 ? [1] : [...Array(n - 2)].reduce((pre, _, idx) => [...pre, pre[idx] + pre[++idx]], [1, 1]).map(val => !(val % 15) ? `FizzBuzz` : !(val % 5) ? `Buzz` : !(val % 3) ? `Fizz` : val);




var fibsFizzBuzz = function(n) {
    let arr = [0, 1]
    for(let i = 2; i <=n;i++){
      arr.push(arr[i-2] + arr[i-1])
    }
    for(let i = 0; i < arr.length; i++){
      if(arr[i]%15 == 0) arr[i] = "FizzBuzz"
       if(arr[i]%5 == 0) arr[i] = "Buzz"
       if(arr[i]%3 == 0) arr[i] = "Fizz"
    }
  arr.shift()
  return arr 
}



const fib = function* () {
  let [prevVal, val] = [0, 1];
  
  while (true) {
    yield val;
    [prevVal, val] = [val, prevVal + val];
  }
}
const fibsFizzBuzz = (n, fibGen = fib()) => 
  [...Array(n)].map(() => fibGen.next().value)
               .map(val => (val % 3 ? '' : 'Fizz') + (val % 5 ? '' : 'Buzz') || val);




