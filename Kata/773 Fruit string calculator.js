// Fruit string calculator

/*
You are given a string of words and numbers. Extract the expression including:

the operator: either addition ("gains") or subtraction ("loses")
the two numbers that we are operating on
Return the result of the calculation.

Notes:

"loses" and "gains" are the only two words describing operators
No fruit debts nor bitten apples = The numbers are integers and no negatives
Examples
"Panda has 48 apples and loses 4"  -->  44
"Jerry has 34 apples and gains 6"  -->  40
Should be a nice little kata for you :)
*/

function calculate(string) {
  return eval(
    string
      .split(" ")
      .map((el) => (+el ? +el : el == "loses" ? "-" : el == "gains" ? "+" : ""))
      .join("")
  );
}

console.log(calculate("Panda has 48 apples and loses 4")); // 44
console.log(calculate("Jerry has 34 apples and gains 6")); // 40



function calculate(string) {
  return eval(string.replace('loses','-').replace('gains','+').replace(/[a-zA-Z]/g,''));
}



function calculate(string) {
  return eval(string.match(/\d+|lose|gain/g).join("").replace("lose", "-").replace("gain", "+")) 
}


calculate = string =>
    string.split(' ')
        .map(x => parseInt(x))
        .filter(x => !isNaN(x))
        .reduce((acc, x) => string.indexOf('loses') !== -1 ? acc - x : acc + x )



function calculate(string) {
  var [a, b] = string.match(/\d+/g);
  return /loses/.test(string) ? a-b : +a+ +b;
}
