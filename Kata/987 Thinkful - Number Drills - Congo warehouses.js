// Thinkful - Number Drills: Congo warehouses

/*
Your company, Congo Pizza, is the second-largest online frozen pizza retailer. 
You own a number of international warehouses that you use to store your frozen pizzas, 
and you need to figure out how many crates of pizzas you can store at each location.

Congo recently standardized its storage containers: all pizzas fit inside a cubic crate, 16-inches on a side. 
The crates are super tough so you can stack them as high as you want.

Write a function box_capacity() that figures out how many crates you can store in a given warehouse. 
The function should take three arguments: the length, width, and height of your warehouse (in feet) 
and should return an integer representing the number of boxes you can store in that space.

For example: a warehouse 32 feet long, 64 feet wide, and 16 feet high can hold 13,824 boxes because you can fit 
24 boxes across, 48 boxes deep, and 12 boxes high, so box_capacity(32, 64, 16) should return 13824.
*/

function boxCapacity(length, width, height) {
  return (
    Math.floor((length * 12) / 16) *
    Math.floor((width * 12) / 16) *
    Math.floor((height * 12) / 16)
  );
}

console.log(boxCapacity(32, 64, 16)); // 13824
console.log(boxCapacity(20, 20, 20)); // 3375
console.log(boxCapacity(79, 80, 59)); // 155760 fractional part




const boxCapacity = (...args) =>
  args.reduce((pre, val) => pre * (val * 3 >> 2), 1);



function boxCapacity(length, width, height) {
  var ltoInches = length * 12;
  var wtoInches = width * 12;
  var htoInches = height * 12;

  var lengthCapacity = Math.floor(ltoInches / 16);
  var widthCapacity = Math.floor(wtoInches / 16);
  var heightCapacity = Math.floor(htoInches / 16);

  return lengthCapacity * widthCapacity * heightCapacity; //code here
}



const boxCapacity = (length, width, height) =>  (length  / 1.33333 | 0) * (width  / 1.333333 | 0) * (height / 1.333333 | 0)



const boxCapacity = (...size) => size.reduce((a, b) => a * (b * 3 / 4 | 0), 1);



const boxCapacity = (..._) => _.reduce((c, d) => c * ~~(d * 0.75), 1);




function boxCapacity(length, width, height) {
  length = Math.floor((length * 12) / 16);
  width = Math.floor((width * 12) / 16);
  height = Math.floor((height * 12) / 16);
  return length * width * height; //code here
}



function boxCapacity(length, width, height) {
  var boxSide = 16 / 12;
 return Math.floor(length / boxSide) * Math.floor( width / boxSide) * Math.floor( height / boxSide);
}
