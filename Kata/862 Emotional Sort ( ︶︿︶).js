// Emotional Sort ( ︶︿︶)

/*
You'll have a function called "sortEmotions" that will return an array of emotions sorted. 
It has two parameters, the first parameter called "arr" will expect an array of emotions 
where an emotion will be one of the following:

:D -> Super Happy
:) -> Happy
:| -> Normal
:( -> Sad
T_T -> Super Sad
Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

And the second parameter is called "order", if this parameter is true 
then the order of the emotions will be descending (from Super Happy to Super Sad) 
if it's false then it will be ascending (from Super Sad to Super Happy)

Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]

Super Happy -> Happy -> Normal -> Sad -> Super Sad
If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

Super Sad -> Sad -> Normal -> Happy -> Super Happy
Example:

arr = [':D', ':|', ':)', ':(', ':D']
sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
More in test cases!

Notes:

The array could be empty, in that case return the same empty array ¯\_( ツ )_/¯
All emotions will be valid


*/

function sortEmotions(arr, order) {
  let descArr = [":D", ":)", ":|", ":(", "T_T"];
  return arr.sort((a, b) =>
    order
      ? descArr.indexOf(a) - descArr.indexOf(b)
      : descArr.indexOf(b) - descArr.indexOf(a)
  );
}

console.log(sortEmotions([":D", "T_T", ":D", ":("], true)); // [ ':D', ':D', ':(', 'T_T' ]
console.log(sortEmotions(["T_T", ":D", ":(", ":("], true)); // [ ':D', ':(', ':(', 'T_T' ]
console.log(sortEmotions([":)", "T_T", ":)", ":D", ":D"], true)); // [ ':D', ':D', ':)', ':)', 'T_T' ]

console.log(sortEmotions([":D", "T_T", ":D", ":("], false)); // [  'T_T', ':(', ':D', ':D' ]
console.log(sortEmotions(["T_T", ":D", ":(", ":("], false)); // [  'T_T', ':(', ':(', ':D' ]
console.log(sortEmotions([":)", "T_T", ":)", ":D", ":D"], false)); // [ 'T_T', ':)', ':)', ':D', ':D' ]




function sortEmotions(arr, order){
  const emotions = { ':D': 1, ':)': 2, ':|': 3, ':(': 4, 'T_T': 5 }
  arr = arr.sort((a, b) => emotions[a] - emotions[b]);
  return order && arr || arr.reverse();
}


function sortEmotions(arr, order){
  const m = {
    ":D": 1,
    ":)": 2,
    ":|": 3,
    ":(": 4,
    "T_T": 5
  }
  return arr.sort((a,b) => order ? m[a] - m[b] : m[b] - m[a])
}


function sortEmotions(arr, order){
  let emo = order? [':D', ':)', ':|', ':(', 'T_T'] : ['T_T', ':(', ':|', ':)', ':D'];
  return arr.sort((a,b) => emo.indexOf(a)-emo.indexOf(b));
}



