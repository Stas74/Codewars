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
