// Difference between years. (Level 1)

/*
Write a function that receives two strings as parameter. 
This strings are in the following format of date: YYYY/MM/DD. 
Your job is: Take the years and calculate the difference between them.

Examples:
'1997/10/10' and '2015/10/10' -> 2015 - 1997 = returns 18 
'2015/10/10' and '1997/10/10' -> 2015 - 1997 = returns 18
At this level, you don't need validate months and days to calculate the difference.
*/

var howManyYears = function(date1, date2){
  return Math.abs(date2.split("/")[0] - date1.split("/")[0])
}

console.log(howManyYears('1997/10/10', '2015/10/10')); // 18
console.log(howManyYears('1990/10/10', '2015/10/10')); // 25


var howManyYears = function(date1, date2) {
  const year = s => +s.split('/')[0];
  return Math.abs(year(date1) - year(date2));
}



// a small collection of solutions
const SOL = [
  (a, b) => Math.abs(a.replace(/\/.*/, '') - b.replace(/\/.*/, '')),
  (a, b) => Math.abs(a.match(/\d*/)[0] - b.match(/\d*/)[0]),
  (a, b) => Math.abs(a.match(/\d*/) - b.match(/\d*/)), // it works too
  (a, b) => Math.abs(a.split('/')[0] - b.split('/')[0]),
  (a, b) => Math.abs(a.slice(0, 4) - b.slice(0, 4)),
  (a, b) => Math.abs(a.substring(0, 4) - b.substring(0, 4)),
  (a, b) => Math.abs(a.substr(0, 4) - b.substr(0, 4)),
  (a, b) => Math.abs(parseInt(a) - parseInt(b)), // this one looks the most elegant
  (a, b) => Math.abs(parseFloat(a) - parseFloat(b)), // why not?
  // (a, b) => eval(`Math.abs(${a} - ${b})`.replace(/\/\d+/g, '')), // does not work if year starts from 0
  (a, b) => eval(`Math.abs(${a} - ${b})`.replace(/\/\d+|\b0*/g, '')), // let's fix it
  // (a, b) => Math.abs(new Date(a).getFullYear() - new Date(b).getFullYear()), // does not work if year starts from 00
  (...args) => args.map(x => x.split('/')[0]).reduce((a, b) => Math.abs(a - b)),
  (...args) => args.map(parseFloat).reduce((a, b) => Math.abs(a - b)) // but not parseInt, guess why?
];

// check if all solutions give the same answer
const howManyYears = (a, b) => SOL.map(fn => fn(a, b)).reduce((x, y) => x == y ? x : null);


const howManyYears = (date1, date2) =>
  Math.abs(parseInt(date1) - parseInt(date2));
