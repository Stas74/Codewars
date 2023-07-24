// Find the area of the rectangle!

/*
Find the area of a rectangle when provided with one diagonal and one side of the rectangle. 
If the input diagonal is less than or equal to the length of the side, return "Not a rectangle". 
If the resultant area has decimals round it to two places.
*/

function area(d, l) {
  return d <= l ? "Not a rectangle" : +((d ** 2 - l ** 2) ** 0.5 * l).toFixed(2);
}

console.log(area(5, 4)); // 12
console.log(area(10, 6)); // 48
console.log(area(13, 5)); // 60
console.log(area(12, 5)); // 54.54
console.log(area(56, 65)); // "Not a rectangle"




function area(d, l) {
  return Math.round(l * Math.sqrt(d*d - l*l) * 1e2) / 1e2 || 'Not a rectangle';
}



function area(d,l){
  return d <= l ? "Not a rectangle" : +(l * Math.sqrt((d*d)-(l*l))).toFixed(2);
}



const area = (z, a) => a >= z ? "Not a rectangle" : Math.round( a * ( Math.sqrt(z * z - a * a) ) * 100 ) / 100



const area = (d, l) =>
  Math.round((d ** 2 - l ** 2) ** .5 * l * 1e2) / 1e2 || `Not a rectangle`;


function area(d,l){
  return (d <= l) ? 'Not a rectangle' : +(Math.sqrt(d**2 - l**2) * l).toFixed(2);
}


