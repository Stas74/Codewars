// Milk and Cookies for Santa

/*
Happy Holidays fellow Code Warriors!
It's almost Christmas Eve, so we need to prepare some milk and cookies for Santa! 
Wait... when exactly do we need to do that?

Time for Milk and Cookies
Complete the function function that accepts a Date object, 
and returns true if it's Christmas Eve (December 24th), false otherwise.

Keep in mind Javascript's Date month is 0 based!

Examples
timeForMilkAndCookies(new Date(2013, 11, 24))  // true
timeForMilkAndCookies(new Date(2013, 0, 23))   // false
timeForMilkAndCookies(new Date(3000, 11, 24))  // true
*/

function timeForMilkAndCookies(date) {
  return date.getMonth() == 11 && date.getDate() == 24;
}

console.log(timeForMilkAndCookies(new Date(2013, 11, 24))); // true
console.log(timeForMilkAndCookies(new Date(2013, 0, 23))); // false
console.log(timeForMilkAndCookies(new Date(3000, 11, 24))); // true



const timeForMilkAndCookies = date => date.getMonth() === 11 && date.getDate() === 24;


function timeForMilkAndCookies(date){
  d=date+""; return d.indexOf("Dec")>=0&&d.indexOf("24")==8
}


function timeForMilkAndCookies(date){
  if (!!date && typeof date === 'object') {
    return (date.getMonth() === 11 && date.getDate() === 24);
  }
  return false;
}


timeForMilkAndCookies = d => String(d).indexOf('Dec 24') > 0;


function timeForMilkAndCookies(date){
  return date.toString().indexOf("Dec 24") > -1;
}


function timeForMilkAndCookies(date){
  return /dec 24/gi.test(date.toString());
}


// functional programming & ramda & with
function timeForMilkAndCookies(date) {
  with (Object)
    var isEveMonth = date => is(date.getMonth``, 11),
        isEveDay = date => is(date.getDate``, 24)
  return require('ramda').both(isEveMonth, isEveDay)(date)
}


