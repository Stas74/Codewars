// Help Suzuki rake his garden!

/*
The monastery has a magnificent Zen garden made of white gravel and rocks and it is raked diligently everyday by the monks. 
Suzuki having a keen eye is always on the lookout for anything creeping into the garden 
that must be removed during the daily raking such as insects or moss.

Rake out any items that are not a rock or gravel and replace them with gravel such that:

garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
Returns a string with all items except a rock or gravel replaced with gravel:a

garden = 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'

*/

function rakeGarden(garden) {
  return garden.split(" ").map(word => word !== "rock" && word !== "gravel" ? "gravel" : word).join(" ");
}

console.log(rakeGarden('slug spider rock gravel gravel gravel gravel gravel gravel gravel')); 
// 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'



const rakeGarden = garden => 
  garden
    .split(' ')
    .map(item => item === 'rock' ? 'rock' : 'gravel')
    .join(' ')


function rakeGarden(garden) {
  var rakedGarden= garden.split(' ').map(value=>value=='rock'?'rock':'gravel').join(' ')  
  return rakedGarden;
}



function rakeGarden(garden) {
  return garden.replace(/\b((?!\b(gravel|rock)\b)\w+)\b/g, 'gravel')
}


var rakeGarden=s=>s.replace(/(?!(?:gravel|rock)\b)\b\w+/g,'gravel')


const rakeGarden = garden =>
  garden.replace(/(?!(gravel|rock)\b)\b\w+/g, `gravel`);


const rakeGarden = garden => garden.split(' ').map(i => i === 'rock' || i === 'gravel' ? i : 'gravel').join(' ')
