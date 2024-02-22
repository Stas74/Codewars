// Miles per gallon to kilometers per liter

/*
Sometimes, I want to quickly be able to convert miles per imperial gallon (mpg) into kilometers per liter (kpl).

Create an application that will display the number of kilometers per liter (output) based on the number 
of miles per imperial gallon (input).

Make sure to round off the result to two decimal points.

Some useful associations relevant to this kata:

1 Imperial Gallon = 4.54609188 litres

1 Mile = 1.609344 kilometres
*/

function converter (mpg) {
  return +(mpg * 1.609344 / 4.54609188).toFixed(2)
}


console.log(converter(10)); // 3.54
console.log(converter(20)); // 7.08
console.log(converter(30)); // 10.62
