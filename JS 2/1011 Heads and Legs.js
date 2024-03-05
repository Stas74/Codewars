// Heads and Legs

/*
#Description

Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes:

“A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?” 

Where x <= 1000 and y <=1000

#Task

Assuming there are no other types of animals, work out how many of each animal are there.

Return a tuple in Python - (chickens, cows) and an array list - [chickens, cows]/{chickens, cows} in all other languages

If either the heads & legs is negative, the result of your calculation is negative or the calculation is a float 
return "No solutions" (no valid cases), or [-1, -1] in COBOL.

In the form:

[Heads, Legs] = [72, 200]

VALID - [72, 200] =>             [44 , 28]   
                             [Chickens, Cows]

INVALID - [72, 201] => "No solutions"

However, if 0 heads and 0 legs are given always return [0, 0] since zero heads must give zero animals.

There are many different ways to solve this, but they all give the same answer.

You will only be given integers types - however negative values (edge cases) will be given.

Happy coding!
*/

function animals(heads, legs) {
  if (heads == 0 && legs == 0) {
    return [0, 0];
  }
  let cows = (legs - heads * 2) / 2;
  let chickens = heads - cows;

  return chickens < 0 || cows < 0 || legs % 2 != 0 ? "No solutions" : [chickens, cows];
}

console.log(animals(72, 200)); // [44, 28]
console.log(animals(116, 282)); // [91, 25]
console.log(animals(25, 555)); // "No solutions"
console.log(animals(54, 956)); // "No solutions"




function animals(heads, legs) {
  const cows = legs / 2 - heads;
  const chickens = heads - cows;
  
  if (legs & 1 || chickens > heads || cows > heads)
    return "No solutions";
  else
    return [chickens, cows];
}



function animals(heads, legs){
  for(var i = 0; i <= heads; i++){
    if( (i * 4 + (heads- i) * 2) == legs){
      return [heads- i,i];
    }
  }
  return 'No solutions';
}




function animals(heads, legs){
  var cows = legs%2 ? -1 : legs/2-heads;
  return heads>=cows && cows>=0 ? [heads-cows, cows] : "No solutions";
}




const animals = (h, l) => {
  const cows = (l - h * 2) / 2;
  const chickens = (l - cows * 4) / 2;
  
  if(/\.|-/g.test(`${chickens}${cows}`)) return 'No solutions'
  
  return [chickens, cows]
}




const animals = (heads, legs) =>
  (cows => cows >= 0 && heads >= cows ? [heads - cows, cows] : `No solutions`)
  (legs % 2 ? -1 : legs / 2 - heads);
