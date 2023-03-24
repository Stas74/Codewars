// Geometric Progression Sequence

/*
In your class, you have started lessons about geometric progression. 
Since you are also a programmer, you have decided to write a function 
that will print first n elements of the sequence with the given constant r and first element a.

Result should be separated by comma and space.

Example
geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'
More info: https://en.wikipedia.org/wiki/Geometric_progression
*/

function geometricSequenceElements(a, r, n) {
  const finArr = [a];
  for (let i = 1; i < n; i++) {
    finArr.push(finArr[i - 1] * r);
  }
  return finArr.join(', ');
}

console.log(geometricSequenceElements(2, 3, 5)); // '2, 6, 18, 54, 162'
console.log(geometricSequenceElements(2, 2, 10)); // '2, 4, 8, 16, 32, 64, 128, 256, 512, 1024'



function geometricSequenceElements(a, r, n){
  var res = [a];
  for (var i = 0; i < n - 1; i++) {
     res.push(res[i]*r);
  }
  return res.join(', ');
}



function geometricSequenceElements(a, r, n){
  return [...Array(n)].map((_,i)=>a*r**i).join(', ')
}



let geometricSequenceElements = (a, r, n) => n === 1 ? '' + a : `${geometricSequenceElements(a, r, n - 1)}, ${a * Math.pow(r, n - 1)}`;


