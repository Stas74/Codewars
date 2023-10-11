// Find the smallest power higher than a given a value

/*
We have the number 12385. We want to know the value of the closest cube but higher than 12385. The answer will be 13824.

Now, another case. We have the number 1245678. 
We want to know the 5th power, closest and higher than that number. The value will be 1419857.

We need a function find_next_power ( findNextPower in JavaScript, CoffeeScript and Haskell), that receives two arguments, 
 a value val, and the exponent of the power, pow_, and outputs the value that we want to find.

Let'see some cases:

findNextPower(12385, 3) == 13824

findNextPower(1245678, 5) == 1419857

The value, val will be always a positive integer.

The power, pow_, always higher than 1.

Happy coding!!
*/

function findNextPower(val, pow_) {
  const total = (Math.floor(val ** (1 / pow_)) + 1) ** pow_;
  return total > val ? total : (Math.floor(val ** (1 / pow_)) + 2) ** pow_;
}

console.log(findNextPower(8, 3)); // 27
console.log(findNextPower(12385, 3)); // 13824
console.log(findNextPower(1245678, 5)); // 1419857
console.log(findNextPower(1245678, 6)); // 1771561
console.log(findNextPower(4782969, 7)); // 10000000
