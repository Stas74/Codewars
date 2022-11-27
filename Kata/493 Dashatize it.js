// Dashatize it

/*
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, 
but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

function dashatize(num) {
  return String(num).replace(/([13579])/g, "-$1-").replace(/--+/g, "-").replace(/(^-|-$)/g, "")
}
// return String(num).split("").map(el => el.replace(/[13579]/gi, `-${el}-`)).join("")

console.log(dashatize(274)); //  "2-7-4"
console.log(dashatize(86320)); //  "86-3-20"
console.log(dashatize(974302)); // "9-7-4-3-02"
console.log(dashatize(NaN)); // "NaN"




function dashatize(num) {
  return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
};



function dashatize(num) {
  return num = num.toString().split("").map(function(c){
    return c % 2 ? "-" + c + "-" :  c ;
  }).join("").split("-").filter(a => a != "").join("-");  
};



const dashatize = num =>
  (String(num).match(/([13579]|[02468]+)/g) || [`NaN`]).join('-');
