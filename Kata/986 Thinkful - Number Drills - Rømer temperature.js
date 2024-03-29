// Thinkful - Number Drills: Rømer temperature

/*
You're writing an excruciatingly detailed alternate history novel set in a world where 
Daniel Gabriel Fahrenheit was never born.

Since Fahrenheit never lived the world kept on using the Rømer scale, 
invented by fellow Dane Ole Rømer to this very day, skipping over the Fahrenheit and Celsius scales entirely.

Your magnum opus contains several thousand references to temperature, 
but those temperatures are all currently in degrees Celsius. 
You don't want to convert everything by hand, so you've decided to write a function, 
celsius_to_romer() that takes a temperature in degrees Celsius and returns the equivalent 
temperature in degrees Rømer.

For example: celsius_to_romer(24) should return 20.1.
Rømer = (Celsius / 1.9047619) + 7.5
*/

function celsiusToRomer(temp) {
  return +(temp / 1.9047619 + 7.5).toFixed(3);
}

console.log(celsiusToRomer(24)); // 20.1
console.log(celsiusToRomer(8)); // 11.7
console.log(celsiusToRomer(29)); // 22.725



function celsiusToRomer(temp) {
  var celsius = temp;
  var romer = ((celsius * 21) / 40) + 7.5;
  return romer;
}



function celsiusToRomer(temp) {
  return temp * 0.525 + 7.5;
}



const celsiusToRomer = temporary => temporary * 0.525 + 7.5



function celsiusToRomer(x) {
  return x * 21 / 40 + 7.5;
}
