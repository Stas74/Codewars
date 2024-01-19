// Thinkful - List and Loop Drills: Lists of lists

/*
You have a two-dimensional list in the following format:

data = [[2, 5], [3, 4], [8, 7]]
Each sub-list contains two items, and each item in the sub-lists is an integer.

Write a function process_data()/processData() that processes each sub-list like so:

[2, 5] --> 2 - 5 --> -3
[3, 4] --> 3 - 4 --> -1
[8, 7] --> 8 - 7 --> 1
and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.

For input, you can trust that neither the main list nor the sublists will be empty.
*/

function processData(data) {
  return data.reduce((prev, cur) => prev * (cur[0] - cur[1]), 1);
}

console.log(processData([[2, 5], [3, 4], [8, 7]])); // 3
console.log(processData([[2, 9], [2, 4], [7, 5]])); // 28



function processData(data){
  return data.reduce((a, [b, c]) => a * (b - c), 1)
}



function processData(data){
  return data.map(el => el[0] - el[1]).reduce((result, el) => result * el) 
}



function processData(data){
  //your code here
  let result = 1;

    for(let i = 0;i<data.length;i++){
      result *= data[i][0] - data[i][1]
    }
  
  return result;
}



