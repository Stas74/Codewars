// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = (n) => {
  let finArr = [];
  while (n > 0) {
    finArr.push(n);
    n--;
  }
  return finArr;
};

console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]


// ----------------------------------------------------

const reverseSeq = n => {
  return Array(n).fill(0).map((e, i) => n - i );
};


const reverseSeq = length => Array.from({length}, () => length--)


const reverseSeq = num => {
  return new Array(num)
      .fill()
      .map((d, i) => i + 1)
      .reverse()
};
