// Holiday VII - Local Talk

/*
In Bali, as far as I can gather, when ex-pats speak to locals, they basically insert the word 'Pak' as often as possible. 
I am assured it means something like 'mate' or 'sir' but that could be completely wrong.

Anyway, as some basic language education(??) this kata requires you to turn any sentence provided (s) into ex-pat balinese waffle 
by inserting the word 'pak' between every other word. Simple 8kyu :D

Pak should not be the first or last word. Strings of just spaces should return an empty string.
*/

function pak(s) {
  return s.trim().split(" ").join(" pak ");
}

console.log(pak("Take me to Semynak!")); // "Take pak me pak to pak Semynak!"
console.log(pak("    ")); // ""



function pak(s){
  return s.split(' ').filter(e => e.length).join(' pak ');
}


function pak(s){
  const stringArray = s.replace(/\s+/g, " pak ")
  if (stringArray == " pak ") return ""
  return stringArray
}



const pak = s => s.trim().replace(/(\s)/g, `$1pak `)



pak=p=>p.trim().split` `.join` pak `


