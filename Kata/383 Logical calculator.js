// Logical calculator

/*
Given an array of Boolean values and a logical operator, 
return a Boolean result based on sequentially applying the operator to the values in the array.

Examples

booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False

booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True

booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False

Input

1. an array of Boolean values (1 <= array_length <= 50)
2. a string specifying a logical operator: "AND", "OR", "XOR"

Output
A Boolean value (True or False).
*/

const ops = {
  "AND": (a, b) => a && b,
  "OR": (a, b) => a || b,
  "XOR": (a, b) => a !== b
}

function logicalCalc(array, op){
  return array.reduce(ops[op]);
}

console.log(logicalCalc([true, true, true, false], "AND")); // false
console.log(logicalCalc([true, true, true, false], "OR")); // true




function logicalCalc(array, op) {
  return eval(array.map(x => +x).join({AND: "&", OR: "|", XOR: "^"}[op])) !== 0
}


const logicalCalc = (array, op) => {
  return array.reduce((acc, cur) => {
    if (op === 'AND') return acc && cur;
    if (op === 'OR') return acc || cur;
    if (op === 'XOR') return acc != cur;
  });
};
