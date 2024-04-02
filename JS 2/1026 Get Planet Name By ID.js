// Get Planet Name By ID

/*
The function is not returning the correct values. Can you figure out why?

Example (Input --> Output ):

3 --> "Earth"


function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
    case 2:
      name = 'Venus'
    case 3:
      name = 'Earth'
    case 4:
      name = 'Mars'
    case 5:
      name = 'Jupiter'
    case 6:
      name = 'Saturn'
    case 7:
      name = 'Uranus'
    case 8:
      name = 'Neptune'
  }
  
  return name;
}

*/

function getPlanetName(id) {
  const planet = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  return planet[id - 1];
}


// To solve original function: add break; in each case!

// function getPlanetName(id) {
//   var name;
//   switch (id) {
//     case 1:
//       name = "Mercury";
//       break;
//     case 2:
//       name = "Venus";
//       break;
//     case 3:
//       name = "Earth";
//       break;
//     case 4:
//       name = "Mars";
//       break;
//     case 5:
//       name = "Jupiter";
//       break;
//     case 6:
//       name = "Saturn";
//       break;
//     case 7:
//       name = "Uranus";
//       break;
//     case 8:
//       name = "Neptune";
//       break;
//   }

//   return name;
// }

console.log(getPlanetName(2)); // 'Venus'
console.log(getPlanetName(5)); // 'Jupiter'
console.log(getPlanetName(3)); // 'Earth'




function getPlanetName(id){
  return {
    1: 'Mercury',
    2: 'Venus',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uranus',
    8: 'Neptune'
  }[id]
}



function getPlanetName(id) {
  var name = {
    1: "Mercury",
    2: "Venus",
    3: "Earth",
    4: "Mars",
    5: "Jupiter",
    6: "Saturn",
    7: "Uranus",
    8: "Neptune",
  };
  return name[id];
}



const getPlanetName = id => ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'][id-1];



const getPlanetName = id =>
  [`Mercury`, `Venus`, `Earth`, `Mars`, `Jupiter`, `Saturn`, `Uranus`, `Neptune`][--id];
