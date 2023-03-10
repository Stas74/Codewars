// The Pony Express

/*
A History Lesson
The Pony Express was a mail service operating in the US in 1859-60.

Pony Express
It reduced the time for messages to travel between the Atlantic and Pacific coasts to about 10 days, before it was made obsolete by the transcontinental telegraph.

How it worked
There were a number of stations, where:

The rider switched to a fresh horse and carried on, or
The mail bag was handed over to the next rider

Kata Task
stations is a list/array of distances (miles) from one station to the next along the Pony Express route.

Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.

NOTE: Each rider travels as far as he can, but never more than 100 miles.
*/

function riders(stations) {
  let rider = 0;
  let total = 0;
  for (let i = 0; i < stations.length; i++) {
    total += stations[i];
    if (total > 100) {
      total = 0;
      total += stations[i];
      rider += 1;
    }
  }
  return rider + 1;
}

console.log(riders([18, 15])); // 1
console.log(riders([43, 23, 40, 13])); // 2
console.log(riders([33, 8, 16, 47, 30, 30, 46])); // 3
console.log(riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49])); // 4
console.log(riders([43, 29, 18, 42, 24, 40, 40, 10, 16, 43])); // 4



function riders(stations) {  
  let rider = 1
  let distance = 0
  for(s of stations){
    if(distance + s > 100){
      rider += 1
      distance = s
    }
    else {
      distance += s
    }
  }
  return rider
}



function riders(stations) {
  let worker=1, sum=0;
  for(let i=0; i<stations.length; i++){
    sum += stations[i];
    if (sum > 100){
      sum=stations[i];
      worker+=1;
    }
  }
  return worker;
}


const riders = stations =>
  stations.reduce(([dist, rid], val) => val + dist > 100 ? [val, ++rid] : [dist + val, rid], [0, 1])[1];


function riders(st, n = 100) {
  return st.map( el => n+el > 100 ? [100, n = el][0] : [0, n += el]).filter(e => e >= 100).length
}
