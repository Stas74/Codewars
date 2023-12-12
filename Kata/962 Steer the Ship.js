// Steer the Ship

/*
You're a pirate. Arrr!

Your task is to steer the pirate ship to the designated location.

Return the direction (left / right) and the angle of how much the ship needs to be turned (in degrees).

More Info:

The ship will always start at Cartesian Coordinate (0,0) facing North.
If the angle is 0 or 180, the direction does NOT matter
Round the result to 2 decimal places if necessary
Examples:

steer(1,1)   => "R: 45"  // turn right for 45 degrees
steer(1,0)   => "R: 90"  // turn right for 90 degrees
steer(-1,-1) => "L: 135" // turn left for 135 degrees
*/

var steer = function (x, y) {
  let a = 90 - Math.atan2(y, x) * (180 / Math.PI);
  let r = a > 180 ? 360 - a : a;
  return `${a < 0 || a > 180 ? "L" : "R"}: ${Math.abs(
    Math.round(r * 100) / 100
  )}`;
};

console.log(steer(1, 1)); // "R: 45"
console.log(steer(1, 0)); // "R: 90"
console.log(steer(-1, Math.sqrt(3))); // "L: 30"
console.log(steer(0, 1)); // "R: 0"




const steer = (x, y) => (angle = Math.atan2(x, y) * 180 / Math.PI, `${angle < 0 ? 'L' : 'R'}: ${Math.round(Math.abs(angle) * 100) / 100}`);



var steer = function(x, y) {
  let deg = Math.atan2(-x, y) * 180 / Math.PI
  return 'RL'[+(deg>0)] + ': ' + +Math.abs(deg).toFixed(2)
}



var steer = function(x, y) {
    var s;
    if (x>=0)
      s=Math.atan(x/y)*180/Math.PI;
    else
      s=Math.atan(-x/y)*180/Math.PI;
    if (s<0||(x==0 && y<0))
      s+=180;
    s=Math.round(s*100)/100;
    return x>0?'R: '+s:'L: '+s;
}



var steer = function(x, y) {
  const direction = +(Math.atan2(x, y) * 180 / Math.PI).toFixed(2);
  if (direction < 0) {
    return `L: ${-direction}`;
  } else {
    return `R: ${direction}`;
  }
}



function steer(x, y) {
  let d = 90 - Math.atan2(y, x) * 180 / Math.PI;
  d = d > 180 ? d - 360 : d;
  return `${'RL'[+(d < 0)]}: ${+Math.abs(d).toFixed(2)}`;
}


