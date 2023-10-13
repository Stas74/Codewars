// Dropcaps

/*
DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, 
just like you see in the newspaper.

But for a change, let"s do that for each and every word of the given String. 
Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

*should work also on Leading and Trailing Spaces and caps.

"apple"            => "Apple"
"apple of banana"  => "Apple of Banana"
"one   space"      => "One   Space"
"   space WALK   " => "   Space Walk   " 
Note: you will be provided atleast one word and should take string as input and return string as output.
*/

function dropCap(n) {  
  return n.split(" ").map(el => el.length > 2 ? el[0].toUpperCase() + el.slice(1).toLowerCase() : el).join(" ");
}

console.log(dropCap("Apple Banana")); // "Apple Banana"
console.log(dropCap("more  than    one space between words")); // "More  Than    One Space Between Words"
console.log(dropCap("rAnDoM CaPs CrAzInEsS")); // "Random Caps Craziness"



function dropCap(n) {
  return n.replace(/\S{3,}/g, w => w.slice(0, 1).toUpperCase() + w.slice(1).toLowerCase());
}



function dropCap(n) {
  n = n.split(' ');
  for(var i = 0; i < n.length; i++) {
    if(n[i].length > 2) {
      n[i] = n[i].slice(0, 1).toUpperCase() + n[i].slice(1).toLowerCase();
    }
  }
  return n.join(' ');
}



const dropCap = n =>
  n.replace(/\b(\w)(\w{2,})/g, (_, $1, $2) => $1.toUpperCase() + $2.toLowerCase());



const dropCap = $ => 
  $.match(/\s|[,]|\w*/g)
    .map(el => el.length > 2 && el !== '' ? (el[0].toUpperCase() + el.slice(1).toLowerCase()) : el)
      .join('')



