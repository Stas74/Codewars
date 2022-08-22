// How old will I be in 2099?

/*
Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. 
As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, 
so your function needs to work with both dates in the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." 
For dates in the past: "You will be born in ... year(s)." 
If the year of birth equals the year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. 
Mind that you need to account for both "year" and "years", depending on the result.
*/


function  calculateAge(current, calc) {
  if (calc - current > 1) {return `You are ${calc - current} years old.`}
  if (calc - current === 1) {return "You are 1 year old."}
  if (current - calc > 1) {return `You will be born in ${current - calc} years.`}
  if (current - calc === 1) {return "You will be born in 1 year."}
  return "You were born this very year!"
}

console.log(calculateAge(2012, 2016))  // "You are 4 years old."
console.log(calculateAge(2000, 2090))  // "You are 90 years old."
console.log(calculateAge(2000, 1990))  // "You will be born in 10 years."
console.log(calculateAge(3400, 3400))  // "You were born this very year!"
console.log(calculateAge(2011, 2012)) // "You are 1 year old."




function  calculateAge(m, n) {
  if(m == n) return 'You were born this very year!';
  var year = Math.abs(m-n) == 1 ? 'year' : 'years';
  if(m < n) return "You are "+(n-m)+' '+year+' old.';
  if(m > n) return "You will be born in "+(-n+m)+' '+year+'.';
}


function calculateAge(a, b) {
  return a > b
    ? `You will be born in ${a - b} year${a - b == 1 ? "" : "s"}.`
    : a < b
    ? `You are ${b - a} year${b - a == 1 ? "" : "s"} old.`
    : `You were born this very year!`;
}
