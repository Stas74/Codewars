// No zeros for heros

/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/


function noBoringZeros(n) { 
  // return +n.toString().replace(/0/gi, '')  
  while (n % 10 === 0 && n !== 0) {
    n /= 10;
  }
  return n  
}

console.log(noBoringZeros(1450))  // 145
console.log(noBoringZeros(960000))  // 96
console.log(noBoringZeros(0))  // 0




function noBoringZeros(n) {
  return +`${n}`.replace(/0*$/, "");
}



function noBoringZeros(n) {
  return Number(String(n).replace(/0+$/,''));
}
