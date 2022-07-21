// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" 
// for the development and functioning of living organisms.


// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// Your function receives one side of the DNA (string, except for Haskell); 
// you need to return the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"


function DNAStrand(dna){
  let finalStr = "";
  for (let char of dna) {
    char === "A" ? finalStr += "T" : char === "T" ? finalStr += "A" : char === "C" ? finalStr += "G" : finalStr += "C"
   }
  return finalStr
}

console.log(DNAStrand("AAAA")); // "TTTT"
console.log(DNAStrand("ATTGC")); // "TAACG"
console.log(DNAStrand("GTAT")); // "CATA"



function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}




var pairs = {'A':'T','T':'A','C':'G','G':'C'};
function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}



let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);
