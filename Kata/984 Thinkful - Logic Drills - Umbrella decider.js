// Thinkful - Logic Drills: Umbrella decider

/*
Write a function take_umbrella() that takes two arguments: 
a string representing the current weather and a float representing the chance of rain today.

Your function should return True or False based on the following criteria.

You should take an umbrella if it's currently raining or if it's cloudy and the chance of rain is over 0.20.
You shouldn't take an umbrella if it's sunny unless it's more likely to rain than not.
The options for the current weather are sunny, cloudy, and rainy.

For example, take_umbrella('sunny', 0.40) should return False.

As an additional challenge, consider solving this kata using only logical operaters and not using any if statements.
*/

function takeUmbrella(weather, chance) {
  return weather == 'rainy' || (weather == 'cloudy' && chance > 0.2) || chance > 0.5 ? true : false;
}

console.log(takeUmbrella("sunny", 0.4)); // false
console.log(takeUmbrella("rainy", 0)); // true
console.log(takeUmbrella("cloudy", 0.2)); // false
console.log(takeUmbrella("sunny", 0.62)); // true




function takeUmbrella(weather, chance) {
  return weather == 'rainy' ||  (weather == 'cloudy' && chance > 0.2) || (weather == 'sunny' && chance > 0.5);
}



const takeUmbrella = (weather, chance) =>
  weather === `rainy` || chance > .5 || weather === `cloudy` && chance > .2;


function takeUmbrella(weather, chance) {
  switch(weather) {
    case 'sunny': return chance > 0.5
    case 'rainy': return true
    case 'cloudy': return chance > 0.2
    default: return false
  }
}



function takeUmbrella(weather, chance) {
  if(weather == "rainy") return true;
  if(weather == "cloudy" && chance > 0.2) return true;
  if(weather == "sunny" && chance > 0.5) return true;
  return false;
}



