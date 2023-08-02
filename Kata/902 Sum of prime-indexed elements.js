// Sum of prime-indexed elements

/*
In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

The first element of the array is at index 0.

Good luck!
*/

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

function total(arr) {
  return arr.filter((el, i) => isPrime(i)).reduce((prev, cur) => prev + cur, 0);
}

console.log(total([])); // 0
console.log(total([1, 2, 3, 4])); // 7
console.log(total([1, 2, 3, 4, 5, 6])); // 13
console.log(total([1, 2, 3, 4, 5, 6, 7, 8])); // 21
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); // 21



const isPrime = num => {
  for (let i = 2; i <= num ** .5; i++) {
    if (!(num % i)) return false;
  }
  return num > 1;
};

const total = arr =>
  arr.reduce((pre, val, idx) => pre + (isPrime(idx) * val), 0);



function total(arr) {
  let sumPrimeIndices = 0;
  for (let i = 2; i < arr.length; i++) {
    if (isPrime(i)) {
      sumPrimeIndices += arr[i];
    }
  }
  return sumPrimeIndices;
}

function isPrime(num) {
  let root = Math.sqrt(num)
  for (var i = 2; i <= root; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}



const total = a => a.reduce((r, e, i) => r + (isPrime(i) ? e : 0), 0);

const isPrime = n => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++)
    if (n % i === 0) return false; 
  return n > 1;
}



(_=>{
  let sieve = Array(5000).fill(true)
  sieve[0] = sieve[1] = false
  for (let i = 2; i < 5000; ++i) {
    if (sieve[i]) {
      for (let j = i * 2; j < 5000; j += i)
        sieve[j] = false
    }
  }
  global.sieve = sieve
})()

function total(arr) {
  return arr.reduce((s,v,i) => global.sieve[i] ? s + v : s, 0)
}



total=(a,p=(a,b=2)=>b*b>a&&a>1?!0:a%b&&a>1?p(a,++b):!1)=>a.reduce((a,b,c)=>a+(p(c)?b:0),0)



