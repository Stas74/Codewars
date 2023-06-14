// Driving School Series #2

/*
Fast & Furious Driving School's (F&F) charges for lessons are as below:

Time	Cost
Up to 1st hour	$30
Every subsequent half hour**	$10
** Subsequent charges are calculated by rounding up to nearest half hour.
For example, if student X has a lesson for 1hr 20 minutes, 
he will be charged $40 (30+10) for 1 hr 30 mins and if he has a lesson for 5 minutes, 
he will be charged $30 for the full hour.

Out of the kindness of its heart, F&F also provides a 5 minutes grace period. 
So, if student X were to have a lesson for 65 minutes or 1 hr 35 mins, 
he will only have to pay for an hour or 1hr 30 minutes respectively.

For a given lesson time in minutes (min) , write a function cost to calculate how much the lesson costs. 
Input is always > 0.
*/

function cost(mins) {
  return mins - 5 <= 60 ? 30 : 30 + Math.ceil((mins - 65) / 30) * 10;
}

console.log(cost(45)); // 30
console.log(cost(63)); // 30
console.log(cost(84)); // 40
console.log(cost(102)); // 50
console.log(cost(283)); // 100



function cost (mins) { 
  let sum=30
  mins-=60
  while (mins>5){sum+=10
       mins-=30      
    }
  return(sum);
} 



function cost (mins) { 
  return 30 + ( mins > 65 ? Math.ceil((mins-65) / 30) : 0 ) * 10
}



function cost (mins) { 
  const firstHrRate = 30;
  const halfHrRate = 10;
  var cost = firstHrRate;
  
  if (mins > 60){
    var halfHours = (mins - 60)/30;
    // Round up if they're out of the 5 min grace period, otherwise round down.
    cost += ((halfHours * 30 % 30 > 5.1) ? Math.ceil(halfHours): Math.floor(halfHours)) * halfHrRate;
    console.log(Math.floor(halfHours));
  }
  
  return cost;
}



function cost (mins) { 
  return Math.ceil(Math.max(0 ,mins - 65) / 30 + 3) * 10;
} 



const cost = mins =>
  30 + 10 * Math.max(0, Math.ceil((mins - 65) / 30));
