// Flick Switch

/*
Task
Create a function that always returns true for every item in a given list. 
However, if an element is the word "flick", switch to always returning the opposite boolean value.

Examples

['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

Notes
"flick" will always be given in lowercase.
A list may contain multiple flicks.
Switch the boolean value on the same element as the flick itself.
*/

function flickSwitch(arr) {
  let flag = true;
  let finArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "flick") {
      flag == true ? flag = false : flag = true;
    }
    finArr.push(flag);
  }
  return finArr;
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"])); // [true, false, false, false]
console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"])); // [false, false, false, false]



function flickSwitch(arr){
  let returning = true;
    return arr.map( (v) => {
      return (v === "flick") ? returning = !returning : returning;
    })
}




function flickSwitch(arr){
  let flick = true  
   return arr.map(item => item === 'flick'? flick = !flick: flick)
}




function flickSwitch(arr){
  let flag = true
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == 'flick'){
      flag == false ? flag = true : flag = false
    } 
    arr[i] = flag
  }
  return arr
}




function flickSwitch(arr) {
  return arr.reduce(
    (a, c, i) =>
      i == 0
        ? a.concat(c == "flick" ? false : true)
        : a.concat(c == "flick" ? !a[a.length - 1] : a[a.length - 1]),
    []
  );
}



const flickSwitch = (arr) => (flick = true, arr.map(v => v === 'flick' ? flick = !flick : flick));




function flickSwitch(arr) {
  let True = true
  
  return arr.map(item=>{
    if(item==='flick'){
      True = !True
    }
    return True
  })
}
