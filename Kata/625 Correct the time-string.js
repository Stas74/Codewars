// Correct the time-string

/*
You have to create a method, that corrects a given time string.
There was a problem in addition, so many of the time strings are broken.
Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.

Examples

"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"  

If the input-string is null or empty return exactly this value! (empty string for C++) 
If the time-string-format is invalid, return null. (empty string for C++)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

function timeCorrect(timestring) {
  if (timestring == null || timestring == "") {
    return timestring;
  }
  timestring = timestring.split(":").reverse().map(Number);
  if (timestring.includes(NaN) || timestring.length !== 3) {
    return null;
  }
  for (let i = 0; i < timestring.length - 1; i++) {
    if (timestring[i] >= 60) {
      timestring[i + 1] += 1;
      timestring[i] -= 60;
    }
  }
  if (timestring[2] > 23) {
    timestring[2] = timestring[2] % 24;
  }
  return timestring.map((el) => el.toString().padStart(2, "0")).reverse().join(":");
}

console.log(timeCorrect("11:70:10")); // "12:10:10"
console.log(timeCorrect("09:10:01")); // "09:10:01"
console.log(timeCorrect("1170:10")); // null
console.log(timeCorrect("0a:1c:22")); // null
console.log(timeCorrect("52:01:01")); // "04:01:01"
