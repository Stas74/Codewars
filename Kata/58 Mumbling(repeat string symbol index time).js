// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let arr = s.toLowerCase().split("");
  let finArr = [];
  for (let i = 0; i < arr.length; i++) {
    finArr.push(arr[i].toUpperCase() + arr[i].repeat(i));
  }
  // string.charAt(0).toUpperCase() + string.slice(1)
  return finArr.join("-");
}

console.log(accum("abcd")); //  "A-Bb-Ccc-Dddd"
console.log(accum("cwAt")); //  "C-Ww-Aaa-Tttt"



