// Cat and Mouse - Harder Version

/*
You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump (j) characters.

Also, the cat cannot jump over the dog.

So:

if j = 5:

..C.....m. returns 'Caught!' <-- not more than j characters between

.....C............m...... returns 'Escaped!' <-- as there are more than j characters between the two, 
the cat can't jump far enough

if j = 10:

...m.........C...D returns 'Caught!' <--Cat can jump far enough and jump is not over dog

...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse

Finally, if all three animals are not present, return 'boring without all three'
*/

function catMouse(x, j) {
  const mouse = x.indexOf("m");
  const cat = x.indexOf("C");
  const dog = x.indexOf("D");
  if (mouse == -1 || cat == -1 || dog == -1) {
    return "boring without all three";
  }
  return Math.abs(cat - mouse) > j
    ? "Escaped!"
    : (dog > mouse && dog < cat) || (dog < mouse && dog > cat)
    ? "Protected!"
    : "Caught!";
}

console.log(catMouse("..D.....Cm", 13)); // "Caught!"
console.log(catMouse("............C.............D..m...", 8)); // "Escaped!"
console.log(catMouse("...m....D....C.......", 10)); // "Protected!"
console.log(catMouse("m.C...", 5)); // "boring without all three"




function catMouse(x, j){
	var index = {};
	for(var l = x.length-1; l >=0; --l){
  	index[x[l]] = l;
  }
  var {C,D,m} = index;
  if(Number.isNaN(C+D+m)) return 'boring without all three'
  if(Math.abs(m-C) <= j){
  	if((D > C && D < m) || (D > m && D < C)) return 'Protected!'
    return 'Caught!'
  }
  return 'Escaped!'
}



function catMouse(str, j){
  const index = {};
  for (let i = str.length - 1; i >= 0; --i) index[str[i]] = i;
  
  let {C, m, D} = index;
  
  if (!(m + C + D > 0)) return 'boring without all three';
  if (C > m) m = [C, C = m][0];
  if (m - C > j) return 'Escaped!';
  return D > C && D < m ? 'Protected!' : 'Caught!';
}



function catMouse(x, j){
		var animoC =  RegExp('C','i');
		var animoD =  RegExp('D','i');
		var animom =  RegExp('m','i');
    if(!(x.match(animoC) && x.match(animoD) && x.match(animom))){
    	return 'boring without all three'
    }
    var qq = new RegExp('(m|C).{0,'+(j-1)+'}(C|m)');
    if(x.match(qq)){
    	var mm = new RegExp('(m|C)\.*D\.*(C|m)');
      if(x.match(mm)){
      return 'Protected!'
      }
    	return 'Caught!'
    }
    return 'Escaped!'
}



const between = (x, a, b) => Math.min(a, b) < x && x < Math.max(a, b);
function catMouse(x, j) {
  let c = x.indexOf('C');
  let m = x.indexOf('m');
  let d = x.indexOf('D');
  if (![c, m, d].every(i => i >= 0)) {
    return 'boring without all three';
  }
  if (Math.abs(c - m) - 1 < j) {
    return between(d, c, m) ? 'Protected!' : 'Caught!';
  }
  return 'Escaped!'
}


