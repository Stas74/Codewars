// Alternating between three values

/*
Suppose a variable x can have only three possible different values a, b and c, 
and you wish to assign to x the value other than its current one, and you wish your code 
to be independent of the values of a, b and c.

What is the most efficient way to cycle among three values? Write a function f so that it satisfies

  f(a) = b
  f(b) = c
  f(c) = a
EXAMPLE
  f( 3, { a:3, b:4, c:5 } ) => 4
*/

function f(x, cc) {
  const arrValues = Object.values(cc);
  return arrValues.concat(arrValues[0])[arrValues.indexOf(x) + 1];
}

console.log(f(3, { a: 3, b: 4, c: 5 })); // 4
console.log(f(4, { a: 3, b: 4, c: 5 })); // 5
console.log(f(5, { a: 3, b: 4, c: 5 })); // 3




function f(x, cc) { 
  switch (x) {
    case cc.a: return cc.b;
    case cc.b: return cc.c;
    case cc.c: return cc.a;
  }
}


const f = (x,{a,b,c}) => ({[a]:b,[b]:c,[c]:a})[x] ;


function f(x, cc) { 
  let [C, A, B] = Object.values(cc)
  const arr = Object.keys(cc)
  return [A, B, C][arr.reduce((acc, e, i) => acc + (cc[e] === x ? i : 0), 0)]
}


function f(x, cc) {
  return cc.a === x ? cc.b : cc.b === x ? cc.c : cc.a
}


function f(value, {a, b, c}) { 
  return {
    [a]: b,
    [b]: c,
    [c]: a,
  }[value]
}


const f = (x, cc) =>
  (arr => arr[(arr.indexOf(x) + 1) % arr.length])
  (Object.values(cc));


function f(x, cc) { 
  // Destructering the object and assigning the values of obj to a,b & c
  const {a, b, c} = cc
  return x === a ? b : x === b ? c : a
}
