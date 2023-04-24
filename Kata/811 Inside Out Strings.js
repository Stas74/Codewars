// Inside Out Strings

/*

You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. 
By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. 
If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'

*/

function insideOut(x) {
  const arr = x.split(" ");
  let finArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 == 0) {
      finArr.push(
        arr[i]
          .slice(0, [arr[i].length / 2])
          .split("")
          .reverse()
          .join("") +
          arr[i]
            .slice([arr[i].length / 2])
            .split("")
            .reverse()
            .join("")
      );
    } else {
      finArr.push(
        arr[i]
          .slice(0, [arr[i].length / 2])
          .split("")
          .reverse()
          .join("") +
          arr[i][(arr[i].length - 1) / 2] +
          arr[i]
            .slice([(arr[i].length + 1) / 2])
            .split("")
            .reverse()
            .join("")
      );
    }
  }
  return finArr.join(" ");
}

console.log(insideOut("man i need a taxi up to ubud")); // 'man i ende a atix up to budu'
console.log(insideOut("take me to semynak")); // 'atek me to mesykan'




const insideOut = (str) => {  
  return str.split(' ').map(x => {    
    let left = x.substring(0, Math.floor(x.length / 2)).split('').reverse().join('')
    let right = x.substring(Math.ceil(x.length / 2)).split('').reverse().join('')
    let middle = x[Math.floor(x.length / 2)]    
    return x.length % 2 ? left + middle + right : left + right
  }).join(' ')
}


const insideOut=x=>x.replace(/\w+/g,y=>(z=y.split("")).slice(0,m=~~((l=z.length)/2)).reverse().concat((l>2&&l%2?z[m]:""),z.slice(-m).reverse()).join(""))



function insideOut(x){
  return x.split(' ').map(a => 
  {    
    var newWord = a.substring(0, Math.floor(a.length/2)).split('').reverse().join('');
    if(a.length % 2 != 0)
    {
      newWord += a[Math.floor(a.length/2)];
      newWord += a.substring(Math.ceil(a.length/2)).split('').reverse().join('');
    }
    else
    {
      newWord += a.substring(Math.ceil(a.length/2)).split('').reverse().join('');
    }  
    return newWord;  
  }).join(' ');
}



const insideOut = (() => {
  const strrev = str => str.split('').reverse().join('');
  const turnout = str => {
    let n = str.length >> 1;
    let [_, a, b, c] = str.match(RegExp(`(.{${n}})(.?)(.{${n}})`));
    return strrev(a) + b + strrev(c);
  }
  return str => str.split(' ').map(turnout).join(' ');
})();



function insideOut(words){
  let result = []
  words.split(' ').forEach(x => {
  if (x.length % 2 !== 0) {
    let midpoint = Math.floor(x.length/2)
    let firstHalf = x.substring(0, midpoint).split('').reverse().join('')
    let secondHalf = x.substring(midpoint+1).split('').reverse().join('')
    result.push(firstHalf + x[midpoint] + secondHalf)
  }
  if (x.length % 2 === 0) {
    let firstHalf = x.substring(0, x.length/2).split('').reverse().join('')
    let secondHalf = x.substring(x.length/2).split('').reverse().join('')
    result.push(firstHalf + secondHalf)
  }
    
    
  })
    return result.join(' ')
}

// if odd, create midpoint variable
// get substr of start to midpoint and reverse
// get substr of midpoint to end and reverse
// return concatenation 
// if even, get substr of start to string.length half, 
// get substr of half to end 
// reverse both and return concat
