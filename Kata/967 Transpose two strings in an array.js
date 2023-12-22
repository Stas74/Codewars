// Transpose two strings in an array

/*
You will be given an array that contains two strings. 
Your job is to create a function that will take those two strings and transpose them, 
so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return

H W  
e o  
l r  
l l  
o d
A few things to note:

There should be one space in between the two characters
You don't have to modify the case (i.e. no need to change to upper or lower)
If one string is longer than the other, there should be a space where the character would be

*/

function transposeTwoStrings(array) {
  let finArr = [];
  array[0].length > array[1].length
    ? (array[1] = array[1] + " ".repeat(array[0].length - array[1].length))
    : (array[0] = array[0] + " ".repeat(array[1].length - array[0].length));
  for (let i = 0; i < array[0].length; i++) {
    finArr.push(array[0][i] + " " + array[1][i]);
  }
  return finArr.join("\n");
}

console.log(transposeTwoStrings(["Hello", "World"])); // "H W\ne o\nl r\nl l\no d"
console.log(transposeTwoStrings(["a", "cat"])); // "a c\n  a\n  t"




function transposeTwoStrings(arr){
  var result = [];
  var len = Math.max(arr[0].length, arr[1].length);
  
  for (var i = 0; i < len; i++) {
    var column = (arr[0][i] || " ") + " " + (arr[1][i] || " ");
    result.push(column);
  }
  
  return result.join("\n");
}




function transposeTwoStrings(arr){
   var s1 = arr[0], 
       s2 = arr[1], 
       l = Math.max(s1.length, s2.length), 
       r = [];
   for (var i = 0; i < l; ++i) {
      r.push((s1[i]||' ') + ' ' + (s2[i]||' '));
   }
   return r.join('\n');
}




function transposeTwoStrings(arr){
  let max = Math.max(arr[0].length, arr[1].length);
  let newArr = [];
  for (var i = 0; i < max; i++) {
    newArr.push(`${arr[0][i] || ' '} ${arr[1][i] || ' '}`);
  }
  return newArr.join('\n');
}



function transposeTwoStrings (array) {
  const long = array[0].length>=array[1].length?array[0]:array[1];
	return [...long].map((e,i) => (array[0][i]||' ')+' '+(array[1][i]||' ')).join('\n');
}




const transposeTwoStrings=([s1,s2])=>[...(s1+" ".repeat(Math.max(0,s2.length-s1.length)))].reduce((a,b,i)=>a.concat(b+" "+(s2[i]||" ")),[]).join("\n")



const transposeTwoStrings = arr =>
  [...arr[0].padEnd(arr[1].length)].map((val, idx) => `${val} ${arr[1].padEnd(arr[0].length)[idx]}`).join(`\n`);



transposeTwoStrings=a=>[...Array(a.reduce((a,b)=>b.length>a?b.length:a,0))].map((_,b)=>[...Array(a.length)].map((_,c)=>a[c]&&a[c][b]||' ').join` `).join`\n`
