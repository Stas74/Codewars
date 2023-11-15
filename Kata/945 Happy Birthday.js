// Happy Birthday

/*
It's your best friend's birthday! You already bought a box for the present. 
Now you want to pack the present in the box. You want to decorate the box with a ribbon and a bow.

But how much cm of ribbon do you need?

Write the method wrap that calculates that!

A box has a height, a width and a length (in cm). 
The ribbon is crossed on the side with the largest area. 
Opposite this side (also the side with the largest area) the loop is bound, calculate with 20 cm more tape.

  wrap(17,32,11) => 162
  wrap(13,13,13) => 124
  wrap(1,3,1) => 32

32, 17, 11
32 + 17 

Notes:
height, width and length will always be >0
*/

function wrap(height, width, length) {
  let sortedArgs = [...arguments].sort((a,b) => b - a);
  return (sortedArgs[0] + sortedArgs[1]) * 2 + sortedArgs[2] * 4 + 20;
}

console.log(wrap(17, 32, 11)); // 162
console.log(wrap(13, 13, 13)); // 124
console.log(wrap(1, 3, 1)); // 32




function wrap(height, width, length){
  return 2 * (height + width + length + Math.min(height, width, length) + 10);
}



const wrap = (height, width, length) =>
  20 + 2 * (height + width + length + Math.min(height, width, length));



function wrap(height, width, length){
  //your code here
  let [a,b,c] = [height,width,length].sort((x,y) => x-y)
  return 2*(c+b) +a*4 + 20;
}



function wrap(height, width, length){
  return Math.min(height, width, length) * 2 + 20 + (height + width + length) * 2;
}

