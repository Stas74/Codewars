// Broken sequence

/*
You receive some random elements as a space-delimited string. 
Check if the elements are part of an ascending sequence of integers starting with 1, 
with an increment of 1 (e.g. 1, 2, 3, 4).

Return:

0 if the elements can form such a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them 
("broken", e.g. "1 2 4" or "1 5")

Examples:

"1 2 3 4"  ==>  return 0, because the sequence is complete

"1 2 4 3"  ==>  return 0, because the sequence is complete (order doesn't matter)

"2 1 3 a"  ==>  return 1, because it contains a non numerical character

"1 3 2 5"  ==>  return 4, because 4 is missing from the sequence

"1 5"      ==>  return 2, because the sequence is missing 2, 3, 4 and 2 is the lowest
*/

function findMissingNumber(sequence) {
  if (sequence === "") {
      return 0;
    }
  sequence = sequence.split(" ").map(Number).sort((a, b) => a - b);
  if (sequence.includes(NaN)) {
    return 1;
  }
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] !== i + 1 ) {
      return i + 1;
    }
  }
  return 0;
}

console.log(findMissingNumber("1 2 3 5")); // 4
console.log(findMissingNumber("")); // 0
console.log(findMissingNumber("1 3")); // 2
console.log(findMissingNumber("1 5")); // 2
console.log(findMissingNumber("1 2 3 4 5")); // 0
console.log(findMissingNumber("2 1 4 3 a")); // 1
console.log(findMissingNumber("2 6 4 5 3")); // 1




function findMissingNumber(sequence){
  if (sequence === "") return 0;
  if (!/^(\d+ )+\d+$/gi.test(sequence)) return 1;
  var arr = sequence.split(' ').map(x => +x);
  var max = Math.max(...arr);
  for(var i = 1; i < max; ++i)
    if (arr.find(x => x == i) == undefined) return i;
  return 0;
}



const findMissingNumber = sequence =>
  /[^\d\s]/.test(sequence) ? 1 : (sequence.match(/\d+/g) || []).sort((a, b) => a - b).findIndex((val, idx) => val != ++idx) + 1;



function findMissingNumber(sequence){
  if (!Number.isInteger(+sequence.split(' ').join(''))) return 1;
  var arr = sequence.split(' ').map(n => +n);
  for (i = 1; i < Math.max(...arr); i++) {
    if (!arr.includes(i)) return i;
  }
  return 0;
}



function findMissingNumber(sequence){
  if (sequence.length < 1) return 0;
  
  var seq = sequence.split(' ').sort((a,b) => a-b).map(x => parseInt(x, 10));
  if (!seq.every(x => x % 1 === 0)) return 1;
  
  for (var j = 1; j <= seq.length; j++) {
    if (j !== seq[j - 1]) return j;
  }  
  return 0;
}


