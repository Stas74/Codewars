// How many days are we represented in a foreign country

/*

How many days are we represented in a foreign country?

My colleagues make business trips to a foreign country. 
We must find the number of days our company is represented in a country. 
Every day that one or more colleagues are present in the country is a day that the company is represented. 
A single day cannot count for more than one day.

Write a function that recieves a list of pairs and returns the number of days that the company 
is represented in the foreign country. 
The first number of the pair is the number of the day of arrival and the second number of the pair 
is the day of departure of someone who travels, i.e. 1 january is number 1 and 31 of december is 365.

Example:

daysRepresented ([[10,17],[200,207]])
Returns 16 because there are two trips of 8 days, which add up to 16.

Happy coding and rank this kata if you wish ;-)

*/

function daysRepresented(trips) {
  return trips.reduce((prev, cur) => prev + (cur[1] - cur[0] + 1), 0);
}

function daysRepresented(trips) {
  let arr = trips.map((v) => {
    let arr = [];
    for (let i = v[0]; i <= v[1]; i++) {
      arr.push(i);
    }
    return arr;
  });
  return [...new Set([].concat(...arr))].length;
}

console.log(
  daysRepresented([
    [10, 15],
    [25, 35],
  ])
); //  17
console.log(
  daysRepresented([
    [2, 8],
    [220, 229],
    [10, 16],
  ])
); // 24
console.log(
  daysRepresented([
    [2, 8],
    [6, 16],
    [17, 26],
  ])
); // 25




function daysRepresented(trips) {
  const set = new Set();
  trips.map(([a, b]) => {
    for (let i = a; i <= b; ++i) {
      set.add(i);
    }
  });
  return set.size;
}



function daysRepresented(trips){
  let days = [];
  for ( let i = 0; i < trips.length; i++){
    for (let k = trips[i][0]; k <= trips[i][1]; k++){
      if (!days.includes(k)){
        days.push(k);
      }
    }
  }
  return days.length;
}


function daysRepresented(trips){
 return  trips.map( (a) => Array.from( {length: a[1] - a[0] + 1}, (_,i) => a[0] + i) )
 
              .reduce(( acc, c )=> acc.concat(c), [])
              
              .filter( ( x, i, arr ) => arr.indexOf( x ) == i )
              
              .length 
  
}



function daysRepresented(trips) {
  const days = Array(365).fill(0);
  for ([a, b] of trips)
    for (let i = a - 1; i < b; i++)
      days[i] = 1;
  return days.reduce((a, b) => a + b);
}
