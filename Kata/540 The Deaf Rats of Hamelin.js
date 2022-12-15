// The Deaf Rats of Hamelin

/*
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats

ex2 P O~ O~ ~O O~ has 1 deaf rat

ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
*/

var countDeafRats = function (town) {
  if (town != null) {
    [left, right] = town.split("P");
    let a = left + right.split("").reverse().join("");
    let b = (a.match(/O~|~O/gi) || []).filter((v) => v == "O~").length;
    return b;
  }
  return 0;
};


console.log(countDeafRats("~O~O~O~O P")); // 0
console.log(countDeafRats("P O~ O~ ~O O~")); // 1
console.log(countDeafRats("~O~O~O~OP~O~OO~")); // 2



var countDeafRats = function(town) {
  let deafs = 0
  let ident = 'O'
  for ( let i = 0; i < town.length; i++){
     if ( town[i] === 'P' ){
      ident =  '~'
     }
     if (town[i] === ident){
       deafs++
     }
     if (town[i] === '~' || town[i] === 'O'){
      i++
     }
   }
  return deafs;
}


var countDeafRats = function(town) {
  return [...town.replace(/ +/g,'')].reduce((a,c,i) => a+(i%2==0 && c=='O'), 0);
}


deaf = town => [...town].filter((x, i, a) => x === 'O' && ((a[i + 1] ==='~' && i < a.indexOf('P')) || (a[i - 1] ==='~' && i > a.indexOf('P')))).length


var countDeafRats = function(town) {
  let deafRats = 0;
  const townArr = 
        town.split(' ')
        .join('')
        .split('')
        .reduce((a,b,i) => {
          return i%2 !== 0 && b === "~" ? deafRats++ : deafRats 
        });
  return deafRats
}
