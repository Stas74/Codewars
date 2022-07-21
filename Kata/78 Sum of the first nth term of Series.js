// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
  if (n === 0) {
    return "0.00";
  } else if (n === 1) {
    return "1.00";
  } else {
    let total = 1.0;
    let lower = 4;
    while (n !== 1) {
      total += 1 / lower;
      lower += 3;
      n--;
    }
    return "" + total.toFixed(2);
  }
}

console.log(SeriesSum(2)); // "1.25"
console.log(SeriesSum(3)); // "1.39"
console.log(SeriesSum(4)); // "1.49"
console.log(SeriesSum(5)); // "1.57"




function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
}



function SeriesSum(n, s = 0) {
    return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
}
