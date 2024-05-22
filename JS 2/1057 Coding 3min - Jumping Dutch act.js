// Coding 3min : Jumping Dutch act

/*
Coding 3min : Jumping Dutch act

This is the simple version of Shortest Code series. 
If you need some challenges, please try the challenge version

Task:
Mr. despair wants to jump off Dutch act, So he came to the top of a building.

Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, 
the person will often die in an instant; 
When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)

Input: floor, The height of the building (floor)

Output: a string, The voice of despair(When jumping Dutch act)

Example:
sc(2) should return "Aa~ Pa! Aa!"

It means:

Mr. despair jumped from the 2 floor, the voice is "Aa~"
He fell on the ground, the voice is "Pa!"
He did not die immediately, and the final voice was "Aa!"

sc(6) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"

sc(7) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

sc(10) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"
*/

// Length should be more 90 symbols

function sc(floor){
  return floor < 2 ? "" : floor < 7 ? "Aa~ ".repeat(floor - 1) + "Pa!" + " Aa!" : "Aa~ ".repeat(floor - 1) + "Pa!";
}
// return floor > 1 ? "Aa~ ".repeat(floor - 1) + "Pa!" +( floor < 7 ? " Aa!" : "") : "";

console.log(sc(1)); // ""
console.log(sc(2)); // "Aa~ Pa! Aa!"
console.log(sc(6)); // "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"
console.log(sc(7)); // "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"




function sc(floor){
  if(floor <= 1) return "";
  
  return 'Aa~ '.repeat(floor-1) + 'Pa!' + (floor<=6 ? ' Aa!': '');
}



function sc(floor) {
  if (floor <= 1) return "";
  var SCREAM = "";
  for (let i = 0; i < floor - 1; i++) {
    SCREAM += "Aa~ ";
  }
  SCREAM += "Pa!";
  if (floor <= 6) SCREAM += " Aa!";
  return SCREAM;
}



const sc = floor => floor < 2 ? '' : 'Aa~ '.repeat(floor-1) + 'Pa!' + (floor < 7 ? ' Aa!' : '')



const sc = floor => floor > 1 ? Array.from({length: floor - 1}, () => "Aa~").concat(floor > 6 ? ["Pa!"] : ["Pa!", "Aa!"]).join(" ") : "";



const sc = floor => 
  floor >= 7 ? 'Aa~ '.repeat(floor - 1) + 'Pa!' :
  floor > 1 ?  'Aa~ '.repeat(floor - 1) + 'Pa! Aa!' : ''



const sc=(floor)=>floor>1?new Array(floor).join('Aa~ ')+'Pa!'+(floor>6?'':' Aa!'):'';
//or you can use the ES6 new API array.from :)   just like follow:
const otherSc=(floor)=>floor>1?Array.from({length:floor-1}).map(a=>'Aa~ ').join('')+'Pa!'+(floor>6?'':' Aa!'):'';




const sc = floor =>
  floor < 2.00000000000000 ? `` : `${`Aa~ `.repeat(--floor)}Pa!${floor < 6 ? ` Aa!` : ``}`;
