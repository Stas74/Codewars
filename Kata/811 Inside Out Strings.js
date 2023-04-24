// Inside Out Strings

/*

You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. 
By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. 
If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'

*/

function insideOut(x) {
  const arr = x.split(" ");
  let finArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 == 0) {
      finArr.push(
        arr[i]
          .slice(0, [arr[i].length / 2])
          .split("")
          .reverse()
          .join("") +
          arr[i]
            .slice([arr[i].length / 2])
            .split("")
            .reverse()
            .join("")
      );
    } else {
      finArr.push(
        arr[i]
          .slice(0, [arr[i].length / 2])
          .split("")
          .reverse()
          .join("") +
          arr[i][(arr[i].length - 1) / 2] +
          arr[i]
            .slice([(arr[i].length + 1) / 2])
            .split("")
            .reverse()
            .join("")
      );
    }
  }
  return finArr.join(" ");
}

console.log(insideOut("man i need a taxi up to ubud")); // 'man i ende a atix up to budu'
console.log(insideOut("take me to semynak")); // 'atek me to mesykan'
