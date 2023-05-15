// Clock in Mirror

/*

Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22

He knows that the time is 11:38

in the same manner:

05:25 --> 06:35

01:50 --> 10:10

11:58 --> 12:02

12:01 --> 11:59

Please complete the function WhatIsTheTime(timeInMirror), 
where timeInMirror is the mirrored time (what Peter sees) as string.

Return the real time as a string.

Consider hours to be between 1 <= hour < 13.

So there is no 00:20, instead it is 12:20.

There is no 13:20, instead it is 01:20.

*/

function WhatIsTheTime(timeInMirror) {
  let hours =
    (timeInMirror.split(":")[1] == "00" ? 12 : 11) -
    +timeInMirror.split(":")[0];
  let minutes =
    timeInMirror.split(":")[1] == "00" ? 00 : 60 - +timeInMirror.split(":")[1];
  return `${String(hours == 0 ? 12 : hours == -1 ? 11 : hours).padStart(
    2,
    "0"
  )}:${String(minutes).padStart(2, "0")}`;
}


console.log(WhatIsTheTime("06:35")); // "05:25"
console.log(WhatIsTheTime("11:59")); // "12:01"
console.log(WhatIsTheTime("12:02")); // "11:58"
console.log(WhatIsTheTime("04:00")); // "08:00"
console.log(WhatIsTheTime("06:00")); // "06:00"
console.log(WhatIsTheTime("12:00")); // "12:00"
