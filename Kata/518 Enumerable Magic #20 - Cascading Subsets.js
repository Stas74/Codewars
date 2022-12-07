// Enumerable Magic #20 - Cascading Subsets

/*
Create a method each_cons that accepts a list and a number n, 
and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  
As you can see, the lists are cascading; ie, they overlap, but never out of order.
*/

function eachCons(array, n) {
  const finArr = []
  for (let i = 0; i < array.length + 1 - n; i++) {   
    finArr.push(array.slice(i, i + n));    
  }
	return finArr;
}

const lst = [3, 5, 8, 13];

console.log(eachCons(lst, 1)); //  [[3], [5], [8], [13]]
console.log(eachCons(lst, 2)); //  [[3,5], [5,8], [8,13]]
console.log(eachCons(lst, 3)); //  [[3,5,8], [5,8,13]]
console.log(eachCons([], 3)); // []




function eachCons(array, n) {
  let res = [];
  
  for(let i = 0; i < array.length; i++){
    res.push(array.slice(i,i + n));
  }
	
  return res.filter(e => e.length === n);
}



function eachCons(array, n) {
  let cascadingSubset = [];
  for( i = 0; i <= array.length - n; i++){
    cascadingSubset.push(array.slice(i, i + n ));
  }
	return cascadingSubset;
}



function eachCons(array, n) {
  const newArr = [];
  for (let a=n, i=0; a <= array.length; i++, a++){
    newArr.push(array.slice(i,a))
  }
  return newArr
}


const eachCons = (l,n) => [...Array(Math.max(0,l.length-n+1)).keys()].map(i=>l.slice(i,i+n));
