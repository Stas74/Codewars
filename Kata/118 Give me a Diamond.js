// Give me a Diamond

// You need to return a string that looks like a diamond shape when printed on the screen,
// using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated
// with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible
// to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n) {
  if (n >= 1 && n % 2 !== 0) {
    let firstHalf = [];
    for (let i = 0; i < (n - 1) / 2; i++) {
      firstHalf.push(
        " ".repeat((n - 1) / 2 - i) + "*".repeat(i * 2 + 1) + "\n"
      );
    }
    return [...firstHalf, "*".repeat(n) + "\n", ...firstHalf.reverse()].join(
      ""
    );
  }
  return null;

  // if (n < 1 || n % 2 === 0) {
  //   return null;
  // }
}

console.log(diamond(1)); //   "*\n"
console.log(diamond(3)); //   " *\n***\n *\n"
console.log(diamond(5)); //   "  *\n ***\n*****\n ***\n  *\n"

console.log(diamond(2)); //   null
console.log(diamond(-3)); //   null
console.log(diamond(0)); //   null





function diamond (n) {
  if (n <= 0 || n % 2 === 0) return null
  str = ''
  for (let i = 0; i < n; i++) { 
    let len = Math.abs((n-2*i-1)/2)
    str += ' '.repeat(len)
    str += '*'.repeat(n-2*len)
    str += '\n'
  }
  return str
}




function diamond(n){
  if (n < 0 || !(n % 2)) return null; 
  const middleIndex = Math.floor(n / 2);
  
  return Array.apply(null, {length: n})
      .map((el, index) => {
        const indentation = Math.abs(index - middleIndex);
        const numberOfAsterisks = n - indentation * 2;
        return Array(indentation + 1).join(' ') + Array(numberOfAsterisks + 1).join('*');
      })
      .join('\n') + '\n';
}



function diamond(n){
  if (n < 0 || !(n % 2)) return null; 
  const middleIndex = Math.floor(n / 2);
  
  return Array.apply(null, {length: n})
      .map((el, index) => {
        const indentation = Math.abs(index - middleIndex);
        const numberOfAsterisks = n - indentation * 2;
        return Array(indentation + 1).join(' ') + Array(numberOfAsterisks + 1).join('*');
      })
      .join('\n') + '\n';
}
