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




const ln = Math.log;
function dateNbDays(a0, a, p) {
	let days = Math.ceil((ln(a) - ln(a0))/ln(1 + p/36000));
  var date = new Date(2016, 0, 1 + days);
  return date.toISOString().split('T')[0];
}



function dateNbDays(a0, a, p) {
    // Bankers use 360 day year, so the daily percent is set like this (360 * 100)
    let dailyRate = p / 36000
    let days = 0
    // Determine the number of days it will take to reach "a"
    while (a0 < a) {
        a0 = a0 * (1 + dailyRate)
        days++
    }
    // Set Date to January 1, 2016
    var targetDate = new Date("2016-01-01")
    // Add the number of days need to set date
    targetDate.setDate(targetDate.getDate() +  days)
    // String version of Year
    var y = targetDate.getFullYear(targetDate).toString();
    // String version of Month (Added 1 because month index at 0)
    var m = (targetDate.getMonth(targetDate) + 1).toString();
    // Add "0" in front of "m" if it is a single digit value
    m = m.length === 1 ? '0' + m: m
    // String version of Day
    var d = targetDate.getDate(targetDate).toString();
    // Add "0" in front of "d" if it is a single digit value
    d = d.length === 1 ? '0' + d: d
    // Add y, m, and d together with "-" in between them
    return y + "-" + m + "-" + d

}



const dateNbDays = function(a0, a, p) {
  const countDay = new Date( 2016, 0, 1 )
  const profit = p / 36000
  
  do{ a0 += a0 * profit
      countDay.setDate( countDay.getDate() + 1 )
  } while ( a0 <= a )
  
  return countDay.toISOString().split('T')[0]
}



const dateNbDays = (a0, a, p) =>
  new Date(2016, 0, 1 + Math.ceil(Math.log(a / a0) / Math.log(p / 36000 + 1))).toISOString().slice(0, 10);



const dateNbDays = (a0, a, p) => new Date(2016, 0, Math.ceil(Math.log(a / a0) / Math.log(p / 36000 + 1)) + 1).toISOString().slice(0,10)



function dateNbDays(a0, a, p) {
  const startingDate = new Date('2016-01-01')
  const dailyInterestRate = p / 36000
  let startingMoney = a0
  let daysPassed = 0
  
  while (startingMoney < a) {
    daysPassed++
    startingMoney += startingMoney * dailyInterestRate
  }
  startingDate.setDate(startingDate.getDate() + daysPassed)
  return startingDate.toISOString().split('T')[0]
}



const dateNbDays = (a0, a, p) => {
	const days = Math.ceil(Math.log(a / a0) / Math.log(1 + p / 100 / 360));
  
  return new Date( +(new Date('2016-01-01')) + days * 24 * 60 * 60 * 1000 )
               .toISOString().replace(/T.*/, '');
}
