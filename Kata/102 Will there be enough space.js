// Will there be enough space?

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, 
// return the number of passengers he can't take.

// Usage Examples:

// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting


function enough(cap, on, wait) {
  return cap - on - wait >= 0 ? 0 :  -cap + on + wait;
}

console.log(enough(10, 5, 5)); // 0
console.log(enough(100, 60, 50)); // 10
console.log(enough(20, 5, 5)); // 0





function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}



function enough(cap, on, wait) {
  return (on+wait > cap) ? on+wait-cap : 0;
}


