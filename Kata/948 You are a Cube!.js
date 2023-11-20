// You are a Cube!

/*
In geometry, a cube is a three-dimensional solid object bounded by six square faces, facets or sides, 
with three meeting at each vertex.
The cube is the only regular hexahedron and is one of the five Platonic solids. 
It has 12 edges, 6 faces and 8 vertices.
The cube is also a square parallelepiped, an equilateral cuboid and a right rhombohedron. 
It is a regular square prism in three orientations, and a trigonal trapezohedron in four orientations.

You are given a task of finding a if the provided value is a perfect cube!
*/

function youAreACube(value) {
  return Number.isInteger(Math.cbrt(value));
}

console.log(youAreACube(1)); // true
console.log(youAreACube(27)); // true
console.log(youAreACube(64)); // true
console.log(youAreACube(2)); // false
console.log(youAreACube(99)); // false



function youAreACube (value){
  return (Math.cbrt(value) % 1 === 0)
}



const youAreACube = value =>
  !(Math.cbrt(value) % 1);



function youAreACube (value){
  var i=0;
  while (value>i*i*i)
    i++;
  return value==i*i*i;
}



const youAreACube = (v) =>
  ((a) => a * a * a == v)(Math.round(Math.pow(v, 1 / 3)));



const youAreACube = value => {
  const squareCube = value ** (1/3);
  const rounded = Math.round(squareCube);
  
  return Math.abs(squareCube - rounded) < 0.000001;
};




