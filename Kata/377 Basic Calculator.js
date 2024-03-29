// Basic Calculator

/*
Write a function called calculate that takes 3 values. 
The first and third values are numbers. 
The second value is a character. If the character is "+" , "-", "*", or "/", 
the function will return the result of the corresponding mathematical function on the two numbers. 
If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

calculate(2,"+", 4); //Should return 6
calculate(6,"-", 1.5); //Should return 4.5
calculate(-4,"*", 8); //Should return -32
calculate(49,"/", -7); //Should return -7
calculate(8,"m", 2); //Should return null
calculate(4,"/",0) //should return null

Keep in mind, you cannot divide by zero. 
If an attempt to divide by zero is made, return null (throw an ArgumentException in C#)/(None in Python).
*/

function calculate(num1, operation, num2) {
  return operation == "+" ? num1 + num2 : operation == "-" ? num1 - num2 :
  operation == "*" ? num1 * num2 : operation == "/" ? num2 == 0 ?  null : num1 / num2 : null
}

// return ["+", "-", "*", "/"].filter(el => el != operation) 
// ?  null : eval(num1 + operation + num2);

console.log(calculate(3.2, "+", 8)); // 11.2
console.log(calculate(3.2, "-", 8)); // -4.8
console.log(calculate(-3, "/", 0)); // null
console.log(calculate(-3, "w", 0)); // null



const calculate = (a, o, b) => /[^-+/*]/.test(o) || !b && o == '/' ? null : eval(a + o + b) || 0;





function calculate(num1, operation, num2) {
  var ops = {
    '+': function(x, y) { return x + y; },
    '-': function(x, y) { return x - y; },
    '*': function(x, y) { return x * y; },
    '/': function(x, y) { return y === 0 ? null : x / y; }
  };
  return (ops[operation] || function() { return null; })(num1, num2);
}
