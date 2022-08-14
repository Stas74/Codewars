// Super Duper Easy

// Make a function that returns the value multiplied by 50 and increased by 6. 
// If the value entered is a string it should return "Error".

function problem(x){
  return typeof x === 'number'? x * 50 + 6 : "Error";
}

console.log(problem("hello")); // "Error"
console.log(problem(5)); // 256



const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;


const problem = x =>
  Number.isFinite(x) ? x * 50 + 6 : `Error`;


const problem = x => x === +x ? (x * 50) + 6 :  'Error' 


function problem(x){
if(isNaN(x) | x === ""){
 return "Error";
} else {
 return(x * 50)+6
 }
}
