// Reverse the bits in an integer

/*
Write a function that reverses the bits in an integer.

For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

You can assume that the number is not negative.
*/

function reverseBits (n) {
  const binRev = n.toString(2).split("").reverse().join("")
  return parseInt(binRev, 2)
}

console.log(reverseBits(417));  // 267
console.log(reverseBits(267));  // 417



let reverseBits = n => parseInt([...n.toString`2`].reverse``.join``, 2)


reverseBits = _ => parseInt([..._.toString`2`].reverse``.join``, 2)
