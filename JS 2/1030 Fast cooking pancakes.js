// Fast cooking pancakes

/*
You need to cook pancakes, but you are very hungry. 
As known, one needs to fry a pancake one minute on each side. 
What is the minimum time you need to cook n pancakes, 
if you can put on the frying pan only m pancakes at a time?
n and m are positive integers between 1 and 1000.

*/

function cookPancakes(n, m) {
  return n > m ? Math.ceil((n / m) * 2) : 2;
}

// let diff = n / m;
// return diff <= 1 ? 2 : Number.isInteger(diff) ? diff * 2 : Math.floor(diff) * 2 + 1;

console.log(cookPancakes(1, 2)); // 2
console.log(cookPancakes(2, 2)); // 2
console.log(cookPancakes(4, 2)); // 4

console.log(cookPancakes(3, 2)); // 3
console.log(cookPancakes(583, 144)); // 9
console.log(cookPancakes(3, 1)); // 6
console.log(cookPancakes(920, 584)); // 4




function cookPancakes(n, m) { 
  const time = Math.ceil((n * 2) / m);
  return time === 1 ? 2 : time;
}



function cookPancakes(n, m) {
  // worst pancakes ever
  return Math.max(Math.ceil((n*2)/m), 2)
}



const cookPancakes = (n, m) => n>m ? Math.ceil((n/m)*2) : Math.ceil(n/m)*2;



function cookPancakes(n, m) {
  let sides = n * 2;
  let xd  =  Math.ceil(sides / m);
  return xd < 2 ? 2 : xd;
}



const cookPancakes = (n, m) => Math.ceil(Math.max(n, m) / m * 2);




