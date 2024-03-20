// Draw stairs

/*
Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

For example n = 3 result in:

"I\n I\n  I"
or printed:

I
 I
  I
Another example, a 7-step stairs should be drawn like this:

I
 I
  I
   I
    I
     I
      I
*/

function drawStairs(n) {
  let finArr = [];
  for (let i = 0; i < n; i++) {
    finArr.push(" ".repeat(i) + "I");
  }
  return finArr.join("\n");
}

console.log(drawStairs(1)); // "I"
console.log(drawStairs(3)); // "I\n I\n  I"
console.log(drawStairs(5)); // "I\n I\n  I\n   I\n    I"




const drawStairs = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");



function drawStairs(n) {
  let step = "I";
  for (let i = 1; i < n; i++) {
    step += "\n" + " ".repeat(i) + "I";
  }
  return step;
}



function drawStairs(n) {
  return Array(n).fill("I").map((e,i)=>e.padStart(i+1," ")).join("\n")
}



const drawStairs = n =>
  [...Array(n)].map((_, idx) => `I`.padStart(++idx)).join(`\n`);



