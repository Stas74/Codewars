// Transform To Prime

/*
Given a List [] of n integers , find minimum number to be inserted in a list, 
so that sum of all elements of list should equal the closest prime number .

Notes
List size is at least 2 .

List's numbers will only positives (n > 0) .

Repetition of numbers in the list could occur .

The newer list's sum should equal the closest prime number .

Input >> Output Examples
1- minimumNumber ({3,1,2}) ==> return (1)

Explanation:
Since , the sum of the list's elements equal to (6) , 
the minimum number to be inserted to transform the sum to prime number is (1) , 
which will make the sum of the List equal the closest prime number (7) 

2-  minimumNumber ({2,12,8,4,6}) ==> return (5)

Explanation:
Since , the sum of the list's elements equal to (32) , 
the minimum number to be inserted to transform the sum to prime number is (5) , 
which will make the sum of the List equal the closest prime number (37)

3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)

Explanation:
Since , the sum of the list's elements equal to (189) , 
the minimum number to be inserted to transform the sum to prime number is (2) , 
which will make the sum of the List equal the closest prime number (191) .
*/

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

function minimumNumber(numbers) {
  let numbersSum = numbers.reduce((prev, cur) => prev + cur, 0);
  if (isPrime(numbersSum)) {
    return 0;
  }
  let found = false;
  while (!found) {
    numbersSum++;
    if (isPrime(numbersSum)) found = true;
  }
  return numbersSum - numbers.reduce((prev, cur) => prev + cur, 0);
}

console.log(minimumNumber([3, 1, 2])); // 1
console.log(minimumNumber([5, 2])); // 0
console.log(minimumNumber([2, 12, 8, 4, 6])); // 5



function minimumNumber(numbers){
  let sum = numbers.reduce((a,b) => a + b)
  for(let i = sum; ; i++) {
    if(prime(i)) return i - sum
  }
  function prime(a) {
    if(a < 2) return false
    if(a % 2 === 0) return a === 2
    for(let i = 3; i * i < a; i += 2) {
      if(a % i === 0) return false
    }
    return true
  }
}



function isPrime (n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function minimumNumber(numbers){
  let count = 0;
  let sum = numbers.reduce((a,b) => a+b);

  if (isPrime(sum)) return 0;

  while(!isPrime(sum)) {
    sum++;
    count++;
  }
  return count;
}



const minimumNumber = (numbers, sum = numbers.reduce((pre, val) => pre + val), min = 0) =>
  Array(sum + min).fill(1).join(``).match(/^1?$|^(11+?)\1+$/) ? minimumNumber(numbers, sum, ++min) : min;
