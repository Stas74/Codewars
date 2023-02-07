// Reverse or rotate

/*
The input is a string str of digits. 
Cut the string into chunks (a chunk here is a substring of the initial string) of size sz 
(ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; 
otherwise rotate it to the left by one position. 
Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"

Example of a string rotated to the left by one position:
s = "123456" gives "234561".
*/

function revrot(str, sz) {
  if (sz <= 0 || str == "" || sz > str.length) {
    return "";
  }
  let finStr = [];
  for (let i = 0; i <= str.length; i += sz) {
    finStr.push(str.slice(i, i + sz));    
  }
  if (finStr[finStr.length - 1].length < sz) {
    finStr.pop();
  }
  return finStr.map(el => el.split("").reduce((prev, cur) => prev + (+cur) ** 3, 0) % 2 == 0 ? 
  el.split("").reverse().join("") : el.slice(1, sz) + el.slice(0, 1)).join("")
}

console.log(revrot("1234", 0)); // ""
console.log(revrot("1234", 5)); // ""
console.log(revrot("733049910872815764", 5)); // "330479108928157"



function revrot(str, sz) {
    if (sz <= 0 || !str || sz > str.length) return '';    
      
    const sumCubes = chunk => chunk.split('').reduce((sum, digit) => sum += digit**3, 0);
    const reverse = chunk => chunk.split('').reverse().join('');
    const rotate = chunk => chunk.slice(1) + chunk.slice(0, 1);
    
    const chunks = [];
    
    for (let i = 0; i < str.length; i += sz) {
      let chunk = str.slice(i, i + sz);
      
      if (chunk.length < sz) continue;
      
      chunk = sumCubes(chunk) % 2 
        ? rotate(chunk)   
        : reverse(chunk);
      
      chunks.push(chunk)
    }
    
    return chunks.join('')
}



function revrot(str, sz) {
  if (sz < 1 || sz > str.length) 
    return '';

  let reverse = s => s.split('').reverse().join('');
  let rotate  = s => s.slice(1) + s.slice(0, 1);
  let sum_cubes = c => c.split('').reduce((a, b) => a + +b ** 3, 0); 

  return str
    .match(new RegExp('.{' + sz + '}', 'g'))
    .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
    .join('');
}



function cubeSum(string){
	return string.split('').map(e=> Math.pow(Number(e),3)).reduce((p,c)=>p+=c);
}

function revrotEach(string){
	if(cubeSum(string)%2===0){
    return string.split('').reverse().join('');
  }
  else{
    return string.slice(1) + string.slice(0,1);
  }
}

function revrot(str, sz) {
  if(sz === 0 || str.length < sz){
  	return '';
  }
  else{
 		var arr = [];
  	for(var c = 0; c < str.length; c+=sz){
    	arr.push(str.slice(c,c+sz));
    }
    return arr.filter(e=> e.length===sz).map(e=>revrotEach(e)).join('');
  }
}




const revrot = (str, sz) =>
  (str.match(new RegExp(`.{${sz}}`, `g`)) || []).map(val => val.replace(/[02468]/g, ``).length % 2 ? val.replace(/(.)(.+)/, `$2$1`) : [...val].reverse().join(``)).join(``);


