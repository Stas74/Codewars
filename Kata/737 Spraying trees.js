// Spraying trees

/*
There are five workers : James,John,Robert,Michael and William.
They work one by one and on weekends they rest. 
Order is same as in the description(James works on mondays,John works on tuesdays and so on).
You have to create a function 'task' that will take 3 arguments(w, n, c):

Weekday

Number of trees that must be sprayed on that day

Cost of 1 litre liquid that is needed to spray tree,let's say one tree needs 1 litre liquid.

Let cost of all liquid be x

Your function should return string like this : 
'It is (weekday) today, (name), you have to work, you must spray (number) trees and you need (x) dollars to buy liquid'

For example:

task('Monday', 15, 2) -> 
'It is Monday today, James, you have to work, you must spray 15 trees and you need 30 dollars to buy liquid'
*/

function task(w, n, c) {
  const workers = ["James", "John", "Robert", "Michael", "William"];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  return `It is ${w} today, ${workers[days.indexOf(w)]}, you have to work, you must spray ${n} trees and you need ${n * c} dollars to buy liquid`
}

console.log(task("Wednesday", 10, 2));
// 'It is Wednesday today, Robert, you have to work, you must spray 10 trees and you need 20 dollars to buy liquid'
console.log(task("Monday", 4, 3));
// 'It is Monday today, James, you have to work, you must spray 4 trees and you need 12 dollars to buy liquid'



let task = (w,n,c) => {
  let obj = {'Monday':'James','Tuesday':'John','Wednesday':'Robert','Thursday':'Michael','Friday':'William'};
  return `It is ${w} today, ${obj[w]}, you have to work, you must spray ${n} trees and you need ${n*c} dollars to buy liquid`;
};


const task = (w, n, c) =>
  (obj => `It is ${w} today, ${obj[w]}, you have to work, you must spray ${n} trees and you need ${n * c} dollars to buy liquid`)
  ({Monday: `James`, Tuesday: `John`, Wednesday: `Robert`, Thursday: `Michael`, Friday: `William`});


