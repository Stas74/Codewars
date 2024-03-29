// Clean up after your dog

/*
You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D

Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.

You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). 
If there are no bags then you can't pick anything up, so you can ignore cap.

You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.

If you do, return 'Clean', else return 'Cr@p'.

Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.

For example:

x=
[[_,_,_,_,_,_]
[_,_,_,_,@,_]
[@,_,_,_,_,_]]

bags = 2, cap = 2

return --> 'Clean'

*/

function crap(x, bags, cap) {
  return x.flat().includes('D') ? "Dog!!" : x.flat().filter(el => el == "@").length <= bags * cap ? "Clean" : "Cr@p";
}

console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2)); // "Clean"
console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 1, 1)); // "Cr@p"
console.log(crap([['_','_'], ['_','@'], ['D','_']], 2, 2)); // "Dog!!"




const crap = (x, bags, cap) =>
  `${x}`.includes(`D`) ? `Dog!!` : `${x}`.split(`@`).length > bags * cap ? `Cr@p` : `Clean`;



crap=(a,b,c)=>(a+"").includes("D")?"Dog!!":(a+"").split("@").length-1<=b*c?"Clean":"Cr@p"



function crap(x, bags, cap){
  var yard = x.reduce( (a, b) => a.concat(b) );
  return yard.includes('D') ? 'Dog!!' : bags * cap - yard.filter( val => val === '@' ).length > 0 ? 'Clean' : 'Cr@p';
}
