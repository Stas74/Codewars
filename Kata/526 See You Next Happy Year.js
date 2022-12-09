// See You Next Happy Year

/*
You're saying good-bye your best friend , See you next happy year .

Happy Year is the year with only distinct digits , (e.g) 2018

Task
Given a year, Find The next happy year or The closest year You'll see your best friend

Notes
Year Of Course always Positive .
Have no fear , It is guaranteed that the answer exists .
c.
Input Year with in range (1000  ≤  y  ≤  9000)

Input >> Output Examples:

nextHappyYear (7712) ==> return (7801)
Explanation:
As the Next closest year with only distinct digits is 7801 .

nextHappyYear (8989) ==> return (9012)
Explanation:
As the Next closest year with only distinct digits is 9012 .

nextHappyYear (1001) ==> return (1023)
Explanation:
As the Next closest year with only distinct digits is 1023 .
*/

function nextHappyYear(year) {
  while (year) {
    year++;
    if ([...new Set(year + "".split(""))].length == 4) {
      break;
    }
  }
  return year;
}

console.log(nextHappyYear(1001)); // 1023
console.log(nextHappyYear(1123)); // 1203
console.log(nextHappyYear(2001)); // 2013



function nextHappyYear(a){
  while(new Set([...++a+'']).size < 4);
  return a;
}


const nextHappyYear = year =>
  new Set(`${++year}`).size < 4 ? nextHappyYear(year) : year;



function nextHappyYear(year, out = []){
  while(true){
    year++
    out = [...`${year}`].map(e => +e)
    if (out.map(el => out.filter(e => e === el).length).reduce((a, b)=> a+b) === 4){
      return year
    }
  }
}
