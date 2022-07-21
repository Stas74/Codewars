// Grade book
// Complete the function so that it finds the average of the three scores passed to it and
// returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100.
// Theres is no need to check for negative values or values greater than 100.

function getGrade(s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3;
  if (avg >= 90) {
    return "A";
  } else if (avg >= 80) {
    return "B";
  } else if (avg >= 70) {
    return "C";
  } else if (avg >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(65, 70, 59)); // "C"
console.log(getGrade(48, 55, 52)); // "F"




function getGrade (s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}



const grades = { A: 90, B: 80, C: 70, D: 60, F: 0 };
const sum    = (sum, item)  => sum + item;
const mean   = (...numbers) => numbers.reduce(sum, 0) / numbers.length;

function getGrade () {
  const score = mean(...arguments);
  
  for (key in grades) {
    if (!grades.hasOwnProperty(key)) continue; // Never do a for-in without this
    if (score >= grades[key]) return key; 
  }
}



var getGrade=(a,b,c)=>'FFFFFFDCBAA'.charAt((a+b+c)/3/10);
