// Train to remove duplicates from an array with filter()

/*
In this kata your task is to remove all the duplicates from the array using a standart build-in method - Array.prototype.filter();
 return the array containing unique values only.

Tip: use the index of value(s) to solve this kata

If you are not familiar with filter() - info is here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

For example:

var arr = [4];

unique(arr); // should return [4]

var arr = [1,1,1,2,2,3];

unique(arr); // should return [1,2,3]

*/

function unique(arr) {
  return arr.filter((el, i) => arr.indexOf(el) == i);
}

// return Array.from(new Set(arr));

console.log(unique([4])); // [4]
console.log(unique([1, 2, 2, 3])); // [1,2,3]




const unique = arr =>
  arr.filter((val, idx) => !arr.slice(0, idx).includes(val))



function unique(arr) {
  let encountered = {};  
  return arr.filter(e => !encountered[e] ? (encountered[e] = true) : false);
}



function unique(arr) {
return Array.from(new Set(arr)).filter(x => x > -Infinity)
}




function unique(arr) {
  let s=new Set();
  return arr.filter(v=>!s.has(v)&&s.add(v));
}



function unique(arr) {
  return arr.sort().filter((v,i,a) => a[i - 1] !== v);
}



function unique(arr) {
  const seen = new Set();
  return arr.filter(v => !seen.has(v) && seen.add(v));
}
