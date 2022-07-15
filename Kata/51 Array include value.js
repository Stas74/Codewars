// You will be given an array a and a value x.
// All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
  for (let element of a) {
    if (element === x) {
      return true;
    }
  };
  return false;
}

console.log(check([66, 101], 66)); // true
console.log(check([101, 45, 75, 105, 99, 107], 107)); // true
console.log(check(["t", "e", "s", "t"], "e")); // true
console.log(check(["what", "a", "great", "kata"], "kat")); // false




function check(a,x){
  return a.includes(x);
};


/*
(5) Use ES2015 method to see if array contains the value.
    Eliminate more cruft.
*/
  const check = (a,x)=>a.includes(x)




/*
  (4) Eliminate all the overhead setup.
      Use the ES2015 SOME method to see if one or more
      of the array entries matches our target.
      Written in the form of a lambda (arrow function) to make it streamlined
    
    const check = (a,x)=>a.some(v=>v==x)
*/

/*
(3) Filter the Array
    Reduce it down to matching values or an empty set ... [66]
    Test the length of the array   [66].length > 0

  function check(a,x){
    return (a.filter(v=>v==x)).length > 0
  }
*/

/*
(2) Walk the array without ability to break the loop.
    Create a variable to hold the state of our match.
    Check if the target is found and return the findings

  function check(a,x){
    let foundTarget = false
    a.forEach((v,i,A)=>{
      if (v==x){ foundTarget = true}
    })
    return foundTarget
  }
*/


/*
  (1) Manually Walk the array, 
    Break out of the loop (return true) if you find a match
    otherwise return false

  function check(a,x){
    for (let i=0; i<a.length;i++){
      console.log(a[i])
      if (a[i]==x){ return true }
    }
    return false
  }
*/
