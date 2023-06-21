// Pluck

/*
Implement a function which takes a sequence of objects and a property name, and returns a sequence 
containing the named property of each object.

For example:

pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
pluck([{a:1, b:3}, {a:2}], 'b') // -> [3, undefined]
If an object is missing the property, you should just leave it as undefined/None in the output array.
*/

function pluck(objs, name) {
  return objs.map((el) => el[name]);
}

console.log(pluck([{ a: 1 }, { a: 2 }], "a")); // [1,2]



const pluck = (objs, name) => objs.map(obj => obj[name]);


function pluck(objs, name) {
  var length = objs.length;
  var pluck = new Array(length);
  for (var i = 0; i < length; i++) {
    pluck[i] = objs[i][name];
  }
  return pluck;
}


function pluck(objs, name) {
  var array = [];
  objs.forEach(function(value){
    array.push(value[name]);
  });
  return array;
}



function pluck(objs, name) {
  return objs.reduce((acc, cur) => 
    acc = cur[name] ? [ ...acc, cur[name] ] : [ ...acc, undefined ]
  , [])
}
