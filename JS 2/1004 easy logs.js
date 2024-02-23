// easy logs

/*
Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.
*/

function logs(x, a, b) {
  return Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x);
}

console.log(logs(10, 2, 3)); // 0.7781512503836435
console.log(logs(5, 2, 3)); // 1.1132827525593785
console.log(logs(1000, 2, 3)); // 0.25938375012788123
