// Primorial Of a Number

/*
Definition (Primorial Of a Number)
Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, 
only prime numbers are multiplied to calculate the primorial of a number. 
It's denoted with P# and it is the product of the first n prime numbers.

Task
Given a number N , calculate its primorial.

Notes
Only positive numbers will be passed (N > 0) .

Input >> Output Examples:

1- numPrimorial (3) ==> return (30)

Explanation:
Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .

Mathematically written as , P3# = 30 .

2- numPrimorial (5) ==> return (2310)

Explanation:
Since the passed number is (5) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 = 2310 .

Mathematically written as , P5# = 2310 .

3- numPrimorial (6) ==> return (30030)

Explanation:
Since the passed number is (6) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 * 13 = 30030 .

Mathematically written as , P6# = 30030 .
*/
function checkPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

function numPrimorial(n) {
  const primeNum = [];
  let startNum = 2;
  while (primeNum.length < n) {
    if (checkPrime(startNum)) {
      primeNum.push(startNum);
    }
    startNum++;
  }
  return primeNum.reduce((prev, cur) => prev * cur, 1);
}

console.log(numPrimorial(3)); // 30
console.log(numPrimorial(4)); // 210
console.log(numPrimorial(5)); // 2310




const numPrimorial = n => [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71].slice(0,n).reduce((p,c) => p*c, 1);


const numPrimorial = n => {
  const arr = [];
  let num = 0;
  while (arr.length < n) {
    if (!Array(++num).fill(1).join(``).match(/^1?$|^(11+?)\1+$/)) arr.push(num);
  }
  return arr.reduce((pre, val) => pre * val);
};




const getPrimeRange = n => {
  let a = [...new Array(n+1).keys()].filter(x=>x%2).slice(1)
  a.unshift(2)
  return a
}

const isPrime = n => {
  let begin = Math.floor(Math.sqrt(n))
  let targets = getPrimeRange(begin)
  return targets.every(x => n%x !== 0)
}


const numPrimorial = n => {
  let primes = [2]
  let i = 2
  while (primes.length <= n-1){
    if (isPrime(i)) primes.push(i)
    i++
  }
  return primes.reduce((s,v)=>s*=v)
}

