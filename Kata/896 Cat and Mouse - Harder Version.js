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
