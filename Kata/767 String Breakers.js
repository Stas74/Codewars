// String Breakers

/*
I will give you an integer (N) and a string. 
Break the string up into as many substrings of N as you can without spaces. 
If there are leftover characters, include those as well.

Example: 

N = 5;

String = "This is an example string";

Return value:
Thisi
sanex
ample
strin
g

Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'

*/

function stringBreakers(n, string) {
  const fullString = string.split(" ").join("");
  const finArr = [];
  for (let i = 0; i < fullString.length; i += n) {
    finArr.push(fullString.slice(i, i + n));
  }
  return finArr.join("\n");
}

console.log(stringBreakers(5, "This is an example string")); // 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'




function stringBreakers(n, s){
  return s.replace(/\s/g,'').replace(new RegExp('.{'+n+'}','g'),'$&\n').trim()
}



function stringBreakers(n, string){
  let result = [];
  string = string.replace(/\s/g, "");
  
  for (let i = 0; i < string.length; i += n) {
    result.push(string.substr(i, n));
  }

  return result.join("\n");
}



function stringBreakers(n, string){
  return string.replace(/\s/g,"").match(new RegExp("\\w{1," + n + "}","g")).join("\n");
}



const stringBreakers = (n, string) =>
  string.replace(/\s/g, ``).match(new RegExp(`\\w{1,${n}}`, `g`)).join(`\n`);



function stringBreakers(n, s){
  s = s.replace(/ /g, '');
  
  return Array.from({length: Math.ceil(s.length/n)}, (_, i) => s.slice(i*n, (i+1)*n))
              .join('\n');  
}
