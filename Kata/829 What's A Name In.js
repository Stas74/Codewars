// What's A Name In

/*

Write a function, taking two strings in parameter, 
that tests whether or not the first string contains all of the letters of the second string, in order.

The function should return true if that is the case, and else false. Letter comparison should be case-INsensitive.

Examples
    nameInStr("Across the rivers", "chris") --> true
                ^      ^  ^^   ^
                c      h  ri   s
                
    Contains all of the letters in "chris", in order.
----------------------------------------------------------
    nameInStr("Next to a lake", "chris") --> false
    
    Contains none of the letters in "chris".
--------------------------------------------------------------------
    nameInStr("Under a sea", "chris") --> false
                   ^   ^
                   r   s
                   
    Contains only some of the letters in "chris".
--------------------------------------------------------------------
    nameInStr("A crew that boards the ship", "chris") --> false
                 cr    h              s i
                 cr                h  s i  
                 c     h      r       s i
                 ...
                 
    Contains all of the letters in "chris", but not in order.
--------------------------------------------------------------------
    nameInStr("A live son", "Allison") --> false
               ^ ^^   ^^^
               A li   son
                 
    Contains all of the correct letters in "Allison", in order, 
    but not enough of all of them (missing an 'l').

*/

function nameInStr(str, name) {
  let finArr = [];
  for (let i = 0; i < name.length; i++) {
    if (str.toLowerCase().indexOf(name[i].toLowerCase()) == -1) {
      return false;
    }
    finArr.push(str.toLowerCase().indexOf(name[i].toLowerCase()));
    str = " ".repeat(finArr[i] + 1) + str.slice(finArr[i] + 1);
  }
  return true;
}

// curChar <= finArr[i - 1] ? finArr.push(str.slice(curChar).indexOf(name[i])) : finArr.push(curChar)
// name.split("").map((el, idx) => {
//   str.indexOf(el) <= finArr[idx - 1] ? finArr.push(1) // finArr.push(str.slice(str.indexOf(el)).indexOf(el))
//   :
//   finArr.push(str.indexOf(el))
// });

console.log(nameInStr("Across the rivers", "chris")); // true
console.log(nameInStr("Next to a lake", "chris")); // false
console.log(nameInStr("A live son", "Allison")); // false




function nameInStr(str, name){
  name = name.toLowerCase()
  str = str.toLowerCase()  
  let index = 0
  
  for (let char of str) {
    if (char === name[index])
      index++
  }  
  return index === name.length
}


const nameInStr = (str, name) =>
  new RegExp([...name].join(`.*`), `i`).test(str);



function nameInStr(str, name){
  var newArr = [];
  name = name.toLowerCase();
  for(var i=0; i < name.length; i++){
      if (str.includes(name[i])){
        newArr.push(true);
        str = str.slice(str.indexOf(name[i])+1);
      }else{
        newArr.push(false);
      }
  } 
  return newArr.reduce((a,b) => a && b);
}



const nameInStr = (str, name) =>
  [...str.toLowerCase()].reduce(
    (acc, item) => acc < name.length && item === name[acc].toLowerCase() ? acc + 1 : acc,
    0
  ) === name.length;



