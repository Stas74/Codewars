// Tram Capacity

/*
Linear Kingdom has exactly one tram line. 
It has n stops, numbered from 1 to n in the order of tram's movement. 
At the i-th stop ai passengers exit the tram, while bi passengers enter it. 
The tram is empty before it arrives at the first stop.

Your task
Calculate the tram's minimum capacity such that the number of people inside the tram never exceeds this capacity at any time. 
Note that at each stop all exiting passengers exit before any entering passenger enters the tram.

Example
stops : 4
descending : [0, 2, 4, 4]
onboarding : [3, 5, 2, 0]
# Should return 6
Explanation:

The number of passengers inside the tram before arriving is 0.
At the first stop 3 passengers enter the tram, and the number of passengers inside the tram becomes 3.
At the second stop 2 passengers exit the tram (1 passenger remains inside). Then 5 passengers enter the tram. 
There are 6 passengers inside the tram now.
At the third stop 4 passengers exit the tram (2 passengers remain inside). Then 2 passengers enter the tram. 
There are 4 passengers inside the tram now.
Finally, all the remaining passengers inside the tram exit the tram at the last stop. 
There are no passenger inside the tram now, which is in line with the constraints.
Since the number of passengers inside the tram never exceeds 6, a capacity of 6 is sufficient. 
Furthermore it is not possible for the tram to have a capacity less than 6. Hence, 6 is the correct answer.

*/

function tram(stops, descending, onboarding) {
  let maxCapacity = 0;
  let currentCapacity = 0;
  for (let i = 0; i < stops; i++) {
    currentCapacity = currentCapacity - descending[i] + onboarding[i];
    if (currentCapacity > maxCapacity) {
      maxCapacity = currentCapacity;
    }
  }
  return maxCapacity;
}

console.log(tram(4, [0, 2, 4, 4], [3, 5, 2, 0])); // 6
console.log(tram(2, [0, 2, 4, 4], [3, 5, 2, 0])); // 6
console.log(tram(1, [0, 2, 4, 4], [3, 5, 2, 0])); // 3
console.log(tram(10, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // 25
console.log(tram(5, [0, 2, 4, 14, 2], [3, 5, 14, 0, 0])); // 16



tram=(i,a,b)=>Math.max(...a.reduce((a,e,i)=>i?[a[0]-e+b[i],...a]:[b[0]],[]).slice(-i))


function tram(stops, descending, onboarding){
  let max = 0;
  let passengers = 0;
  for (let i = 0; i < stops; ++i) {
    passengers += onboarding[i] - descending[i];
    if (max < passengers) {
      max = passengers;
    }
  }
  
  return max;
}



function tram(stops, descending, onboarding) {
  let output = 0
  let passengers = 0

  while (stops--) {
    passengers -= descending.shift()
    passengers += onboarding.shift()
    output = Math.max(output, passengers)
  }
  return output
}



function tram(stops, descending, onboarding){
  return Array.from({length:stops}).reduce((accarr,_,i)=>{
    accarr[0]+=-descending[i]+onboarding[i];
    accarr[1]=Math.max(accarr[0],accarr[1]);
    return accarr;
  },[0,0])[1];
}



function tram(stops, descending, onboarding){
    let result = 0;
    let count = 0;
    for(let i=0; i < stops; i+=1) {
      count += onboarding[i] - descending[i]
      result = Math.max(result,count);
    }
    
   return result;
}



