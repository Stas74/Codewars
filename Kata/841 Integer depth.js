// Integer depth

/*

The depth of an integer n is defined to be how many multiples of n it is necessary to compute before all 10 digits 
have appeared at least once in some multiple.

example:

let see n=42

Multiple         value         digits     comment
42*1              42            2,4 
42*2              84             8         4 existed
42*3              126           1,6        2 existed
42*4              168            -         all existed
42*5              210            0         2,1 existed
42*6              252            5         2 existed
42*7              294            9         2,4 existed
42*8              336            3         6 existed 
42*9              378            7         3,8 existed

Looking at the above table under digits column you can find all the digits from 0 to 9,
 Hence it required 9 multiples of 42 to get all the digits. 
 So the depth of 42 is 9. Write a function named computeDepth which computes the depth of its integer argument.
 Only positive numbers greater than zero will be passed as an input.

*/

function computeDepth(x) {
  let finArr = [];
  let multiple = 1;
  while (finArr.length < 10) {
    String(multiple * x)
      .split("")
      .map((el) => {
        if (finArr.indexOf(el) == -1) {
          finArr.push(el);
        }
      });
    if (finArr.length == 10) {
      return multiple;
    }
    multiple++;
  }
}

console.log(computeDepth(1)); // 10
console.log(computeDepth(42)); // 9




function computeDepth (x){
  var digits = [0,1,2,3,4,5,6,7,8,9];
  var depth  = 0;
  var multiple;
  
  while(digits.length) {
    multiple = (x * ++depth).toString();
    digits   = digits.filter(v => multiple.indexOf(v) === -1);
  }  
  return depth;
}


const computeDepth = x => {
  for(var n = 1, a = new Set();; n++) {
    (x*n+'').split('').forEach(el => a.add(el));
    if (a.size == 10) return n;
  }
};


const computeDepth = (n) => {
  let digits = new Set();
  let depth = 1;
  while (digits.size < 10) {
    let num = depth * n;
    
    while (num > 0) {
      digits.add(num % 10);
      num = Math.floor(num / 10);
    }
    
    depth++;
  }
  return depth - 1;
}


function computeDepth(x, a = [0,1,2,3,4,5,6,7,8,9], n = 0, i = 1){
  return !a.length ? n : computeDepth(x, a.filter(v=>!(''+(x*i)).includes(v)), n+1, i+1);
}


const computeDepth = x => {
  let counter = 0;  
  for(let digits = ''; [...'0123456789'].some(dgt => !digits.includes(dgt)); digits += x * ++counter);  
  return counter;
}


const computeDepth = x => {
  let set = new Set(`${x}`),
      counter = 1;
  while (set.size < 10) [...`${++counter * x}`].forEach(x => set.add(x));
  return counter;
}



