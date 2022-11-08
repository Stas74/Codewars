// Numbers to Letters

/*
Given an array of numbers (in string format), you must return a string. 
The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. 
You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/

function switcher(x) {
  const chars = " zyxwvutsrqponmlkjihgfedcba!? ";
  return x.map(el => chars[el]).join("");
}

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8'])); // "codewars"
console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4'])); // "btswmdsbd"
console.log(switcher(['4', '24'])); // "wc"



const switcher=x=>x.reduce((a, b)=> a + " ?!abcdefghijklmnopqrstuvwxyz"[29-b],"")


switcher= x => x.map(i => '_zyxwvutsrqponmlkjihgfedcba!? '[i]).join``

function switcher(x)
{
  return x.map(a => 
    {
      if(a == 27) return "!";
      if(a == 28) return "?";
      if(a == 29) return " ";
      return String.fromCharCode(97 + 26 - parseInt(a));
      
    }).join('');
}
