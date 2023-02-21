// Cartesian neighbors

/*
A Cartesian coordinate system is a coordinate system that specifies each point uniquely in a plane by a pair 
of numerical coordinates, which are the signed distances to the point from two fixed perpendicular directed lines, 
measured in the same unit of length.

The сoordinates of a point in the grid are written as (x,y). 
Each point in a coordinate system has eight neighboring points. Provided that the grid step = 1.

It is necessary to write a function that takes a coordinate on the x-axis and y-axis and returns a list of all 
the neighboring points. Points inside your returned list need not be sorted (any order is valid).

For Example:

cartesianNeighbor(2,2) -> [[1,1],[1,2],[1,3],[2,1],[2,3],[3,1],[3,2],[3,3]]
cartesianNeighbor(5,7) -> [[6,7],[6,6],[6,8],[4,7],[4,6],[4,8],[5,6],[5,8]]
*/

function cartesianNeighbor(x, y) {
  return [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ];
}

console.log(cartesianNeighbor(2, 2)); // [[1,1],[1,2],[1,3],[2,1],[2,3],[3,1],[3,2],[3,3]]



const cartesianNeighbor = (x, y) =>
  [x - 1, x, x + 1].reduce((pre, val) => [...pre, ...[y - 1, y, y + 1].map(v => [val, v])], []).filter(val => `${val}` !== `${[x, y]}`);


function cartesianNeighbor(x, y){    
    var arr = [];    
    for (var i = x - 1; i <= x + 1; i++) {
      for (var j = y - 1; j <= y + 1; j++) {      
       arr.push([i,j]);      
      }
    }     
    return arr.filter(f => f+'' != [x,y]+'');
}



function cartesianNeighbor(x, y){
    return [-1, 0, 1].reduce((s, v) => s.concat([-1, 0, 1].reduce((si, vi) => si.concat([[x+v, y+vi]]), [])), []).filter(v => v[0] !== x || v[1] != y);
}



function cartesianNeighbor(x, y){
  const ns = [[1,1],[1,2],[1,3],[2,1],[2,3],[3,1],[3,2],[3,3]];
  return ns.map(([X,Y]) => [X+x-2,Y+y-2])
}



function cartesianNeighbor(x, y){
    const d = [[-1, -1], [-1, 0], [-1, 1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];
    return d.map((e) => [x+e[0], y+e[1]]);
}
