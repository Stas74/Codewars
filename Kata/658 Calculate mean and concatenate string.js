// Calculate mean and concatenate string

/*
You will be given an array which will include both integers and characters.

Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. 
There will always be 10 integers and 10 characters. 
Create a single string with the characters and return it as a[1] while maintaining the original order.

lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
Here is an example of your return

[3.6, "udiwstagwo"]

In C# and Java the mean return is a double.
*/

function mean(lst) { 
  return [lst.filter(el => (+el)).reduce((prev, cur) => prev + +cur, 0) / 10, lst.filter(el => !(+el)).join("").replace(/0/g, '')];
}


var lst = ["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"];
console.log(mean(lst)); // [3.6, "udiwstagwo"]



function mean(lst){
  var num = 0, str = '';
  lst.forEach(function(n) {
    if(!isNaN(n)) {
      num += +n;
    }else {
      str += n;
    }
  });  
  return [num / 10, str];
}



const mean=lst=>[lst.filter(a=>"0123456789".indexOf(a)!=-1).reduce((a,b)=>a+ +b,0)/10, lst.filter(a=>"0123456789".indexOf(a)==-1).join("")];



const mean = lst =>
  lst.reduce(([num, str], val) => isNaN(val) ? [num, str + val] : [(num * 10 + +val) / 10, str], [0, ``]);



const mean = lst =>
  [lst.filter(e=>/\d+/.test(e)).reduce((a,b)=>+a + +b)/10,
   lst.filter(e=>/[a-z]/i.test(e)).join('')]



function mean(a) {
  return [
    a.reduce((s, x) => (x == +x ? s + +x : s), 0) / 10,
    a.filter((x) => +x != x).join``,
  ];
}


