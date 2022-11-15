// Age Range Compatibility Equation

/*
Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). 
It's the 'recommended' age range in which to date someone.

age / 2 + 7 = Min
(age - 7) * 2 = Max

minimum age <= your age <= maximum age #Task

Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

This equation doesn't work when the age <= 14, so use this equation instead:

min = age - 0.10 * age
max = age + 0.10 * age

You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). 
Return your answer in the form [min]-[max]

##Examples:

age = 27   =>   20-40
age = 5    =>   4-5
age = 17   =>   15-20

*/

function datingRange(age) {
  if (age <= 14) {
    let minAge = age - 0.1 * age;
    let maxAge = age + 0.1 * age;
    return `${Math.floor(minAge)}-${Math.floor(maxAge)}`;
  } else {
    let minAge = age / 2 + 7;
    let maxAge = (age - 7) * 2;
    return `${Math.floor(minAge)}-${Math.floor(maxAge)}`;
  }
}

console.log(datingRange(17)); // "15-20"
console.log(datingRange(40)); // "27-66"
console.log(datingRange(15)); // "14-16"





function datingRange(age){
  return `${min(age)}-${max(age)}`;
  
  function min(age) {
    return Math.floor(age > 14 ? (age / 2) + 7 : age - 0.10 * age);
  }
  
  function max(age) {
    return Math.floor(age > 14 ? (age - 7) * 2 : age + 0.10 * age);
  }
}



function datingRange(n) {
  return [n <= 14 ? 0.9 * n : 0.5 * n + 7, n <= 14 ? 1.1 * n : 2 * n - 14].map(Math.floor).join("-");
}

