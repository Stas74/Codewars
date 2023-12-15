// Basics 03: Strings, Numbers and Calculation

/*
Here you have to do some mathematical operations on a "dirty string". 
This kata checks some basics, it's not too difficult.

So what to do?

Input: String which consists of two positive numbers (doubles) and 
exactly one operator like +, -, * or / always between these numbers. 
The string is dirty, which means that there are different characters inside too, not only numbers and the operator. 
You have to combine all digits left and right, perhaps with "." inside (doubles), 
and to calculate the result which has to be rounded to an integer and converted to a string at the end.

Easy example:

Input: "gdfgdf234dg54gf*23oP42"
Output: "54929268" (because 23454*2342=54929268)

First there are some static tests, later on random tests too...

Hope you have fun! :-)
*/

function calculateString(st) {
  return Math.round(eval(st.replace(/[^\d.+-/*]/g, ""))) + "";
}

console.log(calculateString(";$%§fsdfsd235??df/sdfgf5gh.000kk0000")); // "47"




function calculateString(s){
    return eval(s.replace(/[^\d+*/.()-]/g,'')).toFixed();
}



function calculateString(st){
    var result = ""
    var valid_simbols = "0123456789+-/*." 
    for (var i=0;i<st.length;i++){
        if (valid_simbols.includes(st[i]))
            result+=st[i]    
    }
    return Math.round(eval(result)).toString();
}



function calculateString(s) {
  return new Function(`return (${s.replace(/[^\d.+*/-]/g, "")}).toFixed()`)();
}



const calculateString = st =>
  (([a, op, b]) => (op === `+` ? +a + +b : op === `-` ? a - b : op === `*` ? a * b : a / b).toFixed())
  (st.replace(/[^\d./+*-]/g, ``).match(/\d+\.*\d*|[/+*-]/g));




function calculateString(st) {
  let calculations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => a / b,
    "*": (a, b) => a * b,
  };

  let sign = st.search(/[-/+*]/g);
  let regexGetNumber = /[0-9.]+/gi;
  let [side1, side2] = st.split(st[sign]);
  let num1 = parseFloat(side1.match(regexGetNumber).join(""));
  let num2 = parseFloat(side2.match(regexGetNumber).join(""));

  return Math.round(calculations[st[sign]](num1, num2)).toString();
}



const calculateString = (str) => `${Math.round(eval(str.replace(/[^0-9\/\+\-\*\.]/g, '')))}`




function calculateString(st){
    return Math.round(eval(st.replace(/[A-Za-z;:$%&§?,]/gi, ''))).toString()
}



const CALC = {
  '+' : (a, b) => +a + +b,
  '-' : (a, b) =>  a -  b,
  '*' : (a, b) =>  a *  b,
  '/' : (a, b) =>  a /  b,
}

const calculateString = str => {
  const [, op1, opnd, op2] = str.replace(/[^\d+\-*/.]/g, '').match(/(\d*\.?\d+).*?([+\-*/]).*?(\d*\.?\d+)/);
  
  return `${Math.round(CALC[opnd](op1, op2))}`;
}
