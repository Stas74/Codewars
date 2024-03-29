// Count the Digit

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

function nbDig(n, d) {
  let counter = 0;
  for (let i = 0; i <= n; i++) {
    let number = String(i * i);
    for (let char of number) {
      if (char === String(d)) {
        counter += 1;
      }
    }
  }
  return counter;
}

console.log(nbDig(10, 1)); // 4
console.log(nbDig( 5750, 0)) // 4700
console.log(nbDig(11011, 2)) // 9481




function nbDig(n, d) {
  var res = 0;
  for (var g = 0; g <= n; g++) {
    var square = (g * g + "").split("");
    square.forEach((s) => (s == d ? res++ : null));
  }
  return res;
}


function nbDig(n, d) {
  var o = "";
  for (var i = 0; i <= n; i++) {
    o += Math.pow(i, 2);
  }
  return o.split(d).length - 1;
}



// crazy condition
function nbDig(n, d) {
  let count = '';
  const re = RegExp(d, 'g');
  for (let i = 0; i <= n; i++){
    count += i**2;
  }
  return count.match(re).length;  
}
