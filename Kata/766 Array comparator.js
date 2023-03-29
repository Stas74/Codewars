// Array comparator

/*
You have two arrays in this kata, every array contains unique elements only. 
Your task is to calculate number of elements in the first array which are also present in the second array.
*/

function matchArrays(v, r) {
  return v.filter((el) => r.indexOf(el) != -1).length;
}

console.log(
  matchArrays(
    ["incapsulation", "OOP", "array"],
    ["time", "propert", "paralelism", "OOP"]
  )
); // 1
console.log(matchArrays([1, 2, 3, 4, 5], [2, 3, 4, 5, 6])); // 4



const matchArrays = (a, b) => a.filter(e => b.includes(e)).length;


function matchArrays(a, b) {
  const s = new Set(a);
  return b.reduce((a, x) => a + s.has(x), 0);
}



function matchArrays(v, r) {
  return v.filter(el => r.indexOf(el) > -1).length;
}



function matchArrays(v, r) {
  return v.reduce((n, x) => r.indexOf(x) >= 0 ? n + 1 : n, 0)
}
