// Double Trouble

/*
WGiven an array of integers (x), and a target (t), 
you must find out if any two consecutive numbers in the array sum to t. 
If so, remove the second number.

Example:

x = [1, 2, 3, 4, 5]
t = 3

1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

[1, 3, 4, 5]

Work through the array from left to right.

Return the resulting array.
*/

function trouble(x, t) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] + x[i + 1] == t) {
      x.splice(i + 1, 1);
      i--;
    }
  }
  return x;
}

console.log(trouble([1, 3, 5, 6, 7, 4, 3], 7)); // [1, 3, 5, 6, 7, 4]
console.log(trouble([4, 1, 1, 1, 4], 2)); // [4, 1, 4]



const trouble = (x, t) =>
  x.reduce((pre, val) => val + pre[pre.length - 1] !== t ? [...pre, val] : pre, []);



function trouble(x, t){
	var newArray = [x[0]];
	for (i = 1; i < x.length; i++) {
		if (x[i] + newArray[newArray.length-1] != t) {
			newArray.push(x[i])
		} 
	}
	return newArray;
}



const trouble= (x, t) => x.reduce((p,c)=> t==c+p[p.length-1]?p:[...p,c],[])


