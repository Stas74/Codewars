// Target Date

/*
You have an amount of money a0 > 0 and you deposit it with an interest rate of p percent divided by 360 per day 
on the 1st of January 2016. You want to have an amount a >= a0.

Task:
The function date_nb_days (or dateNbDays...) with parameters a0, a, p will return, as a string, 
the date on which you have just reached a.

Example:
date_nb_days(100, 101, 0.98) --> "2017-01-01" (366 days)

date_nb_days(100, 150, 2.00) --> "2035-12-26" (7299 days)

Notes:
- The return format of the date is "YYYY-MM-DD"
- The deposit is always on the "2016-01-01"
- Don't forget to take the rate for a day to be p divided by 36000 since banks consider that there are 360 days in a year.
- You have: a0 > 0, p% > 0, a >= a0

*/


function dateNbDays(a0, a, p) {
  const intRate = p / 36000;
  let day = 0;
  let startDate = new Date("2016-01-01");
  while (a0 < a) {
    a0 += a0 * intRate;
    day += 1;
  }
  let endDate = startDate.setDate(startDate.getDate() + day);
  return new Date(endDate).toISOString().split("T")[0];
}

// function addDays(date, days) {
//   var result = new Date(date);
//   result.setDate(result.getDate() + days);
//   return result;
// }

console.log(dateNbDays(4281, 5087, 2)); // "2024-07-03"
console.log(dateNbDays(4620, 5188, 2)); // "2021-09-19"
