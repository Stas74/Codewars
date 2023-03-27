// Sum - Square Even, Root Odd

/*
Complete the function that takes a list of numbers (nums), as the only argument to the function. 
Take each number in the list and square it if it is even, or square root the number if it is odd. 
Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.

Good luck!
*/

const sumSquareEvenRootOdd = (ns) => {
  return ns.reduce(
    (prev, cur) => prev + (cur % 2 == 0 ? cur ** 2 : cur ** 0.5),
    0
  ).toFixed(2);
};

console.log(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0])); // 91.61
console.log(sumSquareEvenRootOdd([1, 14, 9, 8, 17, 21])); // 272.71



const sumSquareEvenRootOdd = ns => {
  return +(ns.reduce((a, b) => a + (b % 2 ? b ** 0.5 : b ** 2), 0)).toFixed(2)
};


const sumSquareEvenRootOdd = ns => +ns.map(el => el%2 ? Math.sqrt(el) : el**2).reduce((a,b)=> a+b).toFixed(2)



const sumSquareEvenRootOdd = ns => {
  let odd = ns.filter(e => e % 2).reduce((a,b) => a + Math.sqrt(b),0);
  let even = ns.filter(e => !(e % 2)).reduce((a,b) => a + Math.pow(b,2),0);
  return +(odd + even).toFixed(2)
};



const sumSquareEvenRootOdd = ns => {
  let newArray = [];
  for (let i of ns) {
    if (i % 2 === 0) {
      newArray.push(i**2); // sq-even
    } else {
      newArray.push(i**0.5); //sqrt-odd
    }
  }
  return +newArray.reduce((a, b) => a + b).toFixed(2);
};



const sumSquareEvenRootOdd = ns => {
  // your code goes here
  var answer = ns.map(n => n % 2 === 0 ? Math.pow(n, 2) : Math.sqrt(n)).reduce((acc, n) => (acc + n)).toFixed(2);
  return Number(answer);
};



const sumSquareEvenRootOdd = ns => {
  const transform = e => e % 2 ? Math.sqrt(e) : e ** 2;
  const sum = (a,b) => a+b;
  return Math.round(ns.map(transform).reduce(sum, 0)*100)/100;
};
