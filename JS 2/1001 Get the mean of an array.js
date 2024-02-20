// Get the mean of an array

/*
It's the academic year's end, fateful moment of your school report. 
The averages must be calculated. All the students come to you and entreat you to calculate their average for them. 
Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

function getAverage(marks) {
  return Math.floor(marks.reduce((prev, cur) => prev + cur, 0) / marks.length);
}

console.log(getAverage([2, 2, 2, 2])); // 2
console.log(getAverage([1, 2, 3, 4, 5])); // 3
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2])); // 1



var getAverage = ( m ) => parseInt(m.reduce((a, b)=> a + b)/ m.length)



function getAverage(marks){
  // calculates total number of marks
  var total = 0;
  for(var i = 0; i < marks.length; i++){
    total += marks[i];
  }  
  /* returns total number of marks divided by number of marks
     rounded down to nearest integer */
  return Math.floor(total / marks.length);
}



const getAverage = marks =>
  ~~(marks.reduce((pre, val) => pre + val, 0) / marks.length);



const getAverage = marks => (marks.reduce((a, b) => a + b) / marks.length) | 0;



