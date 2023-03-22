// Ch4113ng3

/*
Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. 

"Fundamentals" --> "Fund4m3nt41s"
*/

function nerdify(txt) {
  return txt.replace(/[a]/ig, "4").replace(/[e]/ig, "3").replace(/[l]/g, "1");
}

console.log(nerdify("Fund4m3nt41s")); //  "Fund4m3nt41s"
console.log(nerdify("Fundamentals")); //  "Fund4m3nt41s"
console.log(nerdify("Seven")); //  "S3v3n"
console.log(nerdify("Los Angeles")); //  "Los 4ng313s"



const nerdify = t => t.replace(/[aelAE]/g, a => ({'a': 4, 'e': 3, 'l':1 }[a.toLowerCase()]));


function nerdify(txt) {
  txt = txt.replace(/a|A/g, "4");
  txt = txt.replace(/e|E/g, "3");
  txt = txt.replace(/l/g, "1");
  return txt;
}



function nerdify(txt) {
  return txt.replace(/[AaEel]/g, c => "44331"["AaEel".indexOf(c)])
}


let map = {
  'a': 4,
  'A': 4,
  'e': 3,
  'E': 3,
  'l': 1
}

function nerdify(txt){
  return txt
          .split('')
          .map(x => map[x] ? map[x] : x)
          .join('');
}
