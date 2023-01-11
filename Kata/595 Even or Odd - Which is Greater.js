// Even or Odd - Which is Greater?

/*
Given a string of digits confirm whether the sum of all the individual even digits are greater 

than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"
*/

function evenOrOdd(str) {
  const odd = str.split("").reduce((prev, cur) => prev + (+cur % 2 != 0 ? +cur : 0), 0);
  const even = str.split("").reduce((prev, cur) => prev + (+cur % 2 == 0 ? +cur : 0), 0);
  return even == odd ? 'Even and Odd are the same' : even > odd ? 'Even is greater than Odd' : 'Odd is greater than Even';
}


console.log(evenOrOdd('12')); // 'Even is greater than Odd'
console.log(evenOrOdd('123')); // 'Odd is greater than Even'
console.log(evenOrOdd('112')); // 'Even and Odd are the same'




function evenOrOdd(str) {
  var odd = str.split('').filter(o => o % 2 != 0).reduce((a,b) => (+a) + (+b));
  var even = str.split('').filter(e => e % 2 == 0).reduce((a,b) => (+a) + (+b));
  if(even > odd) {
    return 'Even is greater than Odd';
  } else if(even < odd) {
    return 'Odd is greater than Even';
  } else {
    return 'Even and Odd are the same';
  }
}


function evenOrOdd(str) {  
  const diff = [ ...str ]
    .map(Number)
    .reduce((a, b) => b % 2 ? a - b : a + b, 0);
  
  if (diff > 0)
    return 'Even is greater than Odd';  
  if (diff < 0)
    return 'Odd is greater than Even';  
  return 'Even and Odd are the same';  
}



const evenOrOdd = str =>
  (val => val > 0 ? `Even is greater than Odd` : val < 0 ? `Odd is greater than Even` : `Even and Odd are the same`)
  ([...str].reduce((pre, val) => pre + (val % 2 ? -val : +val), 0));




// even&odd
// function evenOrOdd(str) {
//   let odd = [...str].filter(el => el % 2).reduce((a,b) => Number(a) + Number(b), 0)
//   let even = [...str].filter(el => el % 2 === 0).reduce((a,b) => Number(a) + Number(b), 0)
//   return odd > even ? 'Odd is greater than Even' : even > odd ? 'Even is greater than Odd' : 'Even and Odd are the same'
// }
const evenOrOdd = str => 
  [...str].map(el => +el % 2 ? +el : -el).reduce((a,i)=> a + i) > 0 ? 'Odd is greater than Even' :
  [...str].map(el => +el % 2 ? +el : -el).reduce((a,i)=> a + i) < 0 ? 'Even is greater than Odd' :
  'Even and Odd are the same'
