// Number Format

/*

Format any integer provided into a string with "," (commas) in the correct places.

Example:

For n = 100000 the function should return '100,000';
For n = 5678545 the function should return '5,678,545';
for n = -420902 the function should return '-420,902'.

*/

var numberFormat = function (number) {
  return number.toLocaleString("en-US");
};

console.log(numberFormat(100000)); // '100,000'
console.log(numberFormat(5678545)); // '5,678,545'
console.log(numberFormat(-420902)); // '-420,902'




numberFormat = n => n.toLocaleString()


const numberFormat = number =>
  String(number).replace(/\B(?=(\d{3})+\b)/g, `,`);



var numberFormat = function (number) {
  return (''+number).replace(/[0-9](?=(?:\d{3})+$)/g,'$&,');
};



const numberFormat = number => {return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")};



// Format a number with commas in the appropriate places
var numberFormat = function (number) {
    let numStr = number.toString()
    let outputString = "";
    let counter = 0;
    let pos = 1;
    while (pos <= numStr.length) {
        let char = numStr[numStr.length - pos];
        counter += 1;
        if (counter === 4) {
            if (char !== "-") {
                outputString = "," + outputString;
            }
            counter = 1;
        }
        outputString = char + outputString;
        pos += 1;
    }
    return outputString;
};
