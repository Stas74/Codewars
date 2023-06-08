// Write Number in Expanded Form - Part 2

/*
YYou will be given a number and you will need to return it as a string in expanded form :

expanded form illustration

For example:

expanded_from(807.304); // Should return "800 + 7 + 3/10 + 4/1000"
expanded_from(1.24); // should return "1 + 2/10 + 4/100"
expanded_from(7.304); // should return "7 + 3/10 + 4/1000"
expanded_from(0.04); // should return "4/100"
*/

function expandedForm(num) {
  const numArr = String(num).split(".");

  const wholePart = numArr[0]
    .split("")
    .map((el, i) =>
      el == "0" ? "" : el + "0".repeat(numArr[0].length - 1 - i)
    )
    .filter((el) => el != "")
    .join(" + ");

  const fractionPart = numArr[1]
    .split("")
    .map((el, i) => (el == "0" ? "" : el + "/" + "1" + "0".repeat(i + 1)))
    .filter((el) => el != "")
    .join(" + ");

  return numArr[0] == "0" ? fractionPart : wholePart + " + " + fractionPart;
}

console.log(expandedForm(807.304)); // '800 + 7 + 3/10 + 4/1000'
console.log(expandedForm(1.24)); // '1 + 2/10 + 4/100'
console.log(expandedForm(4.28)); // '4 + 2/10 + 8/100'
console.log(expandedForm(7.304)); // '7 + 3/10 + 4/1000'
console.log(expandedForm(0.501)); // '5/10 + 1/1000'




function expandedForm(num) {
  var [int, dec] = (''+num).split('.')

  return int.split('').map((x, y, a) => x + '0'.repeat(a.length - y - 1))
    .concat(dec.split('').map((x, y, a) => `${x}/1${'0'.repeat(y + 1)}`))
    .filter(x => !x.startsWith('0'))
    .join(' + ')
}


function expandedForm(num) {
  let digits = String(num).split('.')[0]
  let decimals = String(num).split('.')[1]
  let result = ''
  
  if (digits !== '0') {
    result += digits.toString()
    .split("")
    .reverse()
    .map( (a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(" + ");
    result += ' + '
  }
  
  result += decimals.toString()
    .split("")
    .map( (a, i) => a + "/" + Math.pow(10, i + 1))
    .filter(a => !a.startsWith('0'))
    .join(" + ");
  
  return result
}



function expandedForm(num) {
  let  result = []
  let [a, b] = String(num).split('.')
  for (let i = 0; i < a.length; i++) {
    if (+a[i]) result.push(a[i] + '0'.repeat(a.length - i - 1)) ;
  }
  for (let j = 0; j < b.length; j++) {
    if (+b[j]) result.push(b[j] + '/1' + '0'.repeat(j + 1));
  }
  
  return result.join(' + ')
}



function expandedForm(num) {
  let [int, dec] = `${num}`.split('.')
  let result = ''
  int.split('').forEach((n,i,arr)=>{
    result += Number(n) ? `${n*(10**(arr.length-1-i))}` + ' + ' : ''
  })
  dec.split('').forEach((n,i,arr)=>{
    result += Number(n) ? n + '/' + `${10**(i+1)}` + `${i !== arr.length-1 ? ' + ' : ''}` : ''
  })
  return result
}



function expandedForm(num) {

  let base = Math.max(0, Math.floor(Math.log(num) / Math.log(10)));
  return `${num}`
    .match(/\d/g)
    .map((d, i) => [+d, Math.pow(10, Math.abs(base - i)), base >= i, i])
    .filter(p => p[0])
    .map(p => p[2] ? p[0] * p[1] : p[0] + '/' + p[1])
    .join(' + ');

}


