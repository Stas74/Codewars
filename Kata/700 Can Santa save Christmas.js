// Can Santa save Christmas?

/*
Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

But he has only 24 hours left. Can he do it?

Your Task:
You will get an array as input with time durations as string in the following format: HH:MM:SS. 
Each duration represents the time taken by Santa to deliver a present. 
Determine whether he can do it in 24 hours or not. 
In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .
*/

function determineTime(durations) {
  let total = durations.map(el => el.split(":").reduce((prev, cur, idx) => 
  prev + (idx == 0 ? +cur * 3600 : idx == 1 ? +cur * 60 : +cur), 0)); // array with  time in sec  
  return total.reduce((prev, cur) => prev + cur, 0) <= 86400
}

// let ex = ["00:30:02"]
// return ex[0].split(":").reduce((prev, cur, idx) => prev + (idx != 2 ? +cur * 60 : +cur), 0)

console.log(determineTime(["00:30:00", "02:30:00", "00:15:00"])); // true
console.log(determineTime(["04:30:00", "02:00:00", "01:30:00", "16:00:00"])); // true
console.log(determineTime(["12:00:00", "12:00:01"])); // false



function determineTime(durations){
   let sec = 0;
   let str = [];
   for (let i = 0; i < durations.length; i++) {
     str = durations[i].split(":");
     sec += +str[0] * 3600 + +str [1] * 60 + +str[2];
    }
    return sec/3600 <=24 ? true : false;
}



const determineTime = durations =>
  durations.map(val => val.split(`:`)).reduce((pre, [h, m, s]) => pre + h * 3600 + m * 60 + +s, 0) <= 8.64e4;



const determineTime = d => d.reduce((p, c) => p + c.split(':').reduce((p, c) => +c + +p * 60), 0) <= 86400;



