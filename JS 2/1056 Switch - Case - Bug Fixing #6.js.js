// Switch/Case - Bug Fixing #6

/*
Switch/Case - Bug Fixing #6
Oh no! Timmy's evalObject function doesn't work. 
He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?

function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b;
    case'-': result = value.a - value.b;
    case'/': result = value.a / value.b;
    case'*': result = value.a * value.b;
    case'%': result = value.a % value.b;
    case'^': result = Math.pow(value.a, value.b);
  }
  return result;
}

*/

function evalObject(value) {
  var result = 0;
  switch (value.operation) {
    case "+":
      return (result = value.a + value.b);
    case "-":
      return (result = value.a - value.b);
    case "/":
      return (result = value.a / value.b);
    case "*":
      return (result = value.a * value.b);
    case "%":
      return (result = value.a % value.b);
    case "^":
      return (result = Math.pow(value.a, value.b));
  }
  return result;
}

console.log(evalObject({ a: 1, b: 1, operation: "+" })); // 2
console.log(evalObject({ a: 1, b: 1, operation: "-" })); // 0
