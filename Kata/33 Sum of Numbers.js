// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and
// including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b) {
  let summ = 0;
  if (b > a) {
    while (b >= a) {
      summ += a;
      a++;
    }
  } else {
    while (a >= b) {
      summ += b;
      b++;
    }
  }
  return summ;
}

console.log(getSum(0, -1)); // -1
console.log(getSum(0, 1)); // 1
console.log(getSum(1, 1)); // 1


// --------------------------------------


const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}


function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}


function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}


function GetSum( a,b ) {
   var result = 0;
   var bigger = a > b ? a : b;
   var smaller = a > b ? b : a;
   for (var i = smaller; i <= bigger; i++) { result += i }
   return result
}
