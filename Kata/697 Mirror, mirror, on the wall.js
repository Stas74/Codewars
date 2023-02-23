// Mirror, mirror, on the wall...

/*
You get a list of integers, and you have to write a function mirror that returns the "mirror" (or symmetric) version 
of this list: i.e. the middle element is the greatest, then the next greatest on both sides, 
then the next greatest, and so on...

More info
The list will always consist of integers in range -1000..1000 and will vary in size between 0 and 10000. 
Your function should not mutate the input array, and this will be tested (where applicable). 
Notice that the returned list will always be of odd size, since there will always be a definitive middle element.

Examples
[]  -->  []
[1]  -->  [1]
[2, 1]  -->  [1, 2, 1]
[1, 3, 2]  -->  [1, 2, 3, 2, 1]
[-8, 42, 18, 0, -16]  -->  [-16, -8, 0, 18, 42, 18, 0, -8, -16]
[-3, 15, 8, -1, 7, -1] --> [-3, -1, -1, 7, 8, 15, 8, 7, -1, -1, -3]
[-5, 10, 8, 10, 2, -3, 10] --> [-5, -3, 2, 8, 10, 10, 10, 10, 10, 8, 2, -3, -5]
Good luck!
*/

function mirror(data) {
  const copySortArr = data.slice().sort((a,b) => a - b);
  return copySortArr.slice(0, -1).concat(copySortArr.reverse());
}
// return data.slice().sort((a,b) => a - b).slice(0, -1).concat(data.slice().sort((a,b) => b - a));

console.log(mirror([2, 1])); // [1, 2, 1]
console.log(mirror([2, 3, 1])); // [1, 2, 3, 2, 1]



function mirror(data) {
  const sort = data.slice().sort((a, b) => a - b);
  return [...sort, ...sort.reverse().slice(1)];
}


function mirror(data) {
  var result = [].concat(data).sort((a, b) => a - b);
  result.pop();
  return result.concat([].concat(data).sort((a, b) => b - a));
}



function mirror(data) {
  const sorted = data.slice().sort((a,b) => a - b)
  const sortedInverted = sorted.slice().reverse().slice(1)
  
  return sorted.concat(sortedInverted)
}


const mirror = data =>
  (arr => [...arr, ...arr.reverse().slice(1)])
  ([...data].sort((a, b) => a - b));


const mirror = (a, b=a.slice().sort((x,y)=>x-y)) => [...b, ...b.reverse().slice(1)]
