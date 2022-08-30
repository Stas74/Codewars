// L1: Bartender, drinks!

/*
Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"

Note: anything else is the default case: if the input to the function is not any of the values in the table, 
then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. 
For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/

const db = {
  "jabroni":	"Patron Tequila",
  "school Counselor":	"Anything with Alcohol",
  "programmer":	"Hipster Craft Beer",
  "bike Gang Member":	"Moonshine",
  "politician":	"Your tax dollars",
  "rapper":	"Cristal"
}

function getDrinkByProfession(param){
  return db[param.toLowerCase()] === undefined ? "Beer" : db[param.toLowerCase()];
}

console.log(getDrinkByProfession("jabrOni")) // "Patron Tequila"
console.log(getDrinkByProfession("prOgramMer")) //  "Hipster Craft Beer"
console.log(getDrinkByProfession("Man")) //  "Beer"




const drinks = {
  "jabroni": "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  "programmer": "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  "politician": "Your tax dollars",
  "rapper": "Cristal"
}

const getDrinkByProfession = profession => drinks[profession.toLowerCase()] || "Beer"



function getDrinkByProfession(param){
  let map = new Map([
      ["jabroni", "Patron Tequila"],
      ["school counselor", "Anything with Alcohol"],
      ["programmer", "Hipster Craft Beer"],
      ["bike gang member", "Moonshine"],
      ["politician", "Your tax dollars"],
      ["rapper", "Cristal"]
      ]);
      
   let normal = param.toLowerCase();
   return map.has(normal) ? map.get(normal) : "Beer";
}



function getDrinkByProfession(param) {
  param = param.toLowerCase();
  
  switch(param) {
    case "jabroni": return "Patron Tequila";
    case "school counselor": return "Anything with Alcohol";
    case "programmer": return "Hipster Craft Beer";
    case "bike gang member": return "Moonshine";
    case "politician": return "Your tax dollars";
    case "rapper": return "Cristal";
    default: return "Beer";
  }
}
