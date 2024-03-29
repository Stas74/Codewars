// Running out of space

/*

Kevin is noticing his space run out! Write a function that removes the spaces from the values 
and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] 
would produce ['i','ihave','ihaveno','ihavenospace']

*/

function spacey(array) {
  const finArr = [array[0]];
  for (let i = 1; i < array.length; i++) {
    finArr.push(finArr[i - 1] + array[i]);
  }
  return finArr;
}

console.log(spacey(["kevin", "has", "no", "space"])); //  [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']



function spacey(array){
	let string = ''
	return array.map( (e) => string += e )
}


function spacey(a) {
  for (let i = 1; i < a.length; i++) {
    a[i] = a[i - 1] + a[i];
  }
  return a;
}


spacey = (a, s = "") => a.map((a) => (s += a));


const spacey = array =>
  array.map((_, idx) => array.slice(0, ++idx).join(``));


function spacey(array){
  let str = ''
  return array.map(el => str += el)
}
