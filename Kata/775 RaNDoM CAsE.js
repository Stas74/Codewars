// RaNDoM CAsE

/*
Write a function that will randomly upper and lower characters in a string - randomCase() (random_case() for Python).

A few examples:

randomCase("Lorem ipsum dolor sit amet, consectetur adipiscing elit") == 
"lOReM ipSum DOloR SiT AmeT, cOnsEcTEtuR aDiPiSciNG eLIt"

randomCase("Donec eleifend cursus lobortis") == "DONeC ElEifEnD CuRsuS LoBoRTIs"
Notes:

This function will work within the basic ASCII character set to make this kata easier - 
so no need to make the function multibyte safe.

The letters MUST be selected randomly - filters are set to make sure there is no cheating!
*/

function randomCase(x) {
  return x
    .split("")
    .map((el) =>
      el == " "
        ? " "
        : Math.round(Math.random())
        ? el.toUpperCase()
        : el.toLowerCase()
    )
    .join("");
}

console.log(randomCase("this is an all lower string")); //
console.log(randomCase("peace")); //



function randomCase(x) {
  return x.split('')
          .map(function(e) { return Math.random() < 0.5 ? e.toUpperCase() : e.toLowerCase(); })
          .join('');
}


var randomCase = s => [...s.toLowerCase()].map(v => Math.random() > .5 ? v.toUpperCase() : v).join``


const randomCase = x => x.replace(/\w/g, c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase());


const randomCase = x =>
  x.replace(/\w/gi, val => val[`to${Math.random() < .5 ? `Upp` : `Low`}erCase`]());
