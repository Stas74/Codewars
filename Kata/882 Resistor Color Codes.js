// Resistor Color Codes

/*
Resistors are electrical components marked with colorful stripes/bands to indicate both their resistance value in ohms 
and how tight a tolerance that value has. While you could always get a tattoo like Jimmie Rodgers to help you remember 
the resistor color codes, in the meantime, 
you can write a function that will take a string containing a resistor's band colors and return a string identifying 
the resistor's ohms and tolerance values.

The resistor color codes
You can see this Wikipedia page for a colorful chart, but the basic resistor color codes are:

black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, gray: 8, white: 9

Each resistor will have at least three bands, with the first and second bands indicating the first two digits of the ohms value, 
and the third indicating the power of ten to multiply them by, for example a resistor with the three bands "yellow violet black" 
would be 47 * 10^0 ohms, or 47 ohms.

Most resistors will also have a fourth band that is either gold or silver, with gold indicating plus or minus 5% tolerance, 
and silver indicating 10% tolerance. Resistors that do not have a fourth band are rated at 20% tolerance. 
(There are also more specialized resistors which can have more bands and additional meanings for some of the colors, 
  but this kata will not cover them.)

Your mission
The way the ohms value needs to be formatted in the string you return depends on the magnitude of the value:

For resistors less than 1000 ohms, return a string containing the number of ohms, a space, 
the word "ohms" followed by a comma and a space, the tolerance value (5, 10, or 20), 
and a percent sign. For example, for the "yellow violet black" resistor mentioned above, you would return "47 ohms, 20%".

For resistors greater than or equal to 1000 ohms, but less than 1000000 ohms, you will use the same format as above, 
except that the ohms value will be divided by 1000 and have a lower-case "k" after it. 
For example, for a resistor with bands of "yellow violet red gold", you would return "4.7k ohms, 5%"

For resistors of 1000000 ohms or greater, you will divide the ohms value by 1000000 and have an upper-case "M" after it. 
For example, for a resistor with bands of "brown black green silver", you would return "1M ohms, 10%"

Test case resistor values will all be between 10 ohms and 990M ohms.

More examples, featuring some common resistor values

"brown black black"                "10 ohms, 20%"
"brown black brown gold"          "100 ohms, 5%"
"red red brown"                   "220 ohms, 20%"
"orange orange brown gold"        "330 ohms, 5%"
"yellow violet brown silver"      "470 ohms, 10%"
"blue gray brown"                 "680 ohms, 20%"
"brown black red silver"           "1k ohms, 10%"
"brown black orange"              "10k ohms, 20%"
"red red orange silver"           "22k ohms, 10%"
"yellow violet orange gold"       "47k ohms, 5%"
"brown black yellow gold"        "100k ohms, 5%"
"orange orange yellow gold"      "330k ohms, 5%"
"red black green gold"             "2M ohms, 5%"
*/

function decodeResistorColors(bands) {
  const color = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "gray", "white", "silver", "gold"];
  let arr = bands.split(" ").map((el) => color.indexOf(el));
  let ohmsValue = +(arr[0] + "" + arr[1] + "") * 10 ** arr[2];
  return `${
    ohmsValue < 1000
      ? ohmsValue
      : ohmsValue < 1000000
      ? ohmsValue / 1000 + "k"
      : ohmsValue / 1000000 + "M"
  } ohms, ${arr.length != 4 ? 20 : arr[3] == 10 ? 10 : 5}%`;
}

console.log(decodeResistorColors("yellow violet black")); // "47 ohms, 20%"
console.log(decodeResistorColors("yellow violet red gold")); // "4.7k ohms, 5%"
console.log(decodeResistorColors("brown black green silver")); // "1M ohms, 10%"





const decodeResistorColors = bands => {
  const colors = {black:0,brown:1,red:2,orange:3,yellow:4,green:5,blue:6,violet:7,gray:8,white:9,gold:5,silver:10},
    [first, second, multiplier, tolerance] = bands.split(' ').map(color => colors[color]),
    ohm = (10 * first + second) * 10**multiplier;
  return `${ohm >= 10**6 ? ohm / 10**6 + 'M' : ohm >= 1000 ? ohm / 1000 + 'k' : ohm} ohms, ${tolerance || 20}%`;
}



const colors = {
 black: 0,
 brown: 1,
 red: 2,
 orange: 3,
 yellow: 4,
 green: 5,
 blue: 6,
 violet: 7,
 gray: 8,
 white: 9,
 gold: 5,
 silver: 10
};
const decodeResistorColors = bands => {
  const vals = bands.split(' ').map(a => colors[a]);
  const ohms = (vals[0]*10 + vals[1]) * 10**vals[2];
  const prettyOhms = ohms < 1e3 ? ohms
                   : ohms < 1e6 ? ohms / 1e3 + 'k'
                   : ohms / 1e6 + 'M';
  const tol = vals[3] || 20;
  return `${prettyOhms} ohms, ${tol}%`;
}



const decodeResistorColors = bands => {
  const obj = {black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, gray: 8, white: 9, gold: 5, silver: 10};
  const arr = bands.split(` `);
  const res = (10 * obj[arr[0]] + obj[arr[1]]) * 10 ** obj[arr[2]];
  return `${res >= 1e6 ? `${res / 1e6}M` : res >= 1e3 ? `${res / 1e3}k` : res} ohms, ${obj[arr[3]] || 20}%`;
}  



function decodeResistorColors(s) {
  "use strict";
  const CODES = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "gray", "white"];
  let a = s.split(" ");
  var ohms = eval(CODES.indexOf(a[0]).toString() + CODES.indexOf(a[1]).toString() + ` * Math.pow(10, ${CODES.indexOf(a[2])})`);
  return `${ohms < 1000 ? ohms : ohms < 1e6 ? ohms / 1000 + "k" : ohms / 1e6 + "M"} ohms, ${s.split(" ").length === 3 ? 20 : s.split(" ")[3] === "silver" ? 10 : 5}%`;
}



function decodeResistorColors(bands) {
  const colors = ["black","brown","red","orange","yellow",
                  "green","blue","violet","gray","white", "gold", "silver"];
  
  bands = bands.split(/\s/).map(band => colors.indexOf(band.toLowerCase()));
  
  let [d1, d2, exp, tol] = bands;
  
  tol = tol ? (tol === colors.indexOf("gold") ? 5 : 10) : 20;
  
  let amount = (d1 * 10 + d2) * Math.pow(10, exp);
  
  if ( amount < 1000) {
    return `${amount} ohms, ${tol}%`;
  } 
  
  if (amount < 1000000) {
    return `${amount/1000}k ohms, ${tol}%`;
  }
  
  return `${amount/1000000}M ohms, ${tol}%`;
}
