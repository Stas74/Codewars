// Quarter of the year

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs
// as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June),
// is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  return Math.ceil(month / 3);
};

console.log(quarterOf(3)); // 1
console.log(quarterOf(8)); // 3
console.log(quarterOf(11)); // 4



const quarterOf = (month, quarter = 4) => {
  switch (month) {
    case 1:
    case 2:
    case 3:
      quarter = 1;
      break;
    case 4:
    case 5:
    case 6:
      quarter = 2;
      break;
    case 7:
    case 8:
    case 9:
      quarter = 3;
      break;
  }
  return quarter;
};


const quarterOf = (month) => {
  if (month <= 3) {
    quarter = 1; }
  else if (month <=6) {
    quarter = 2; }
  else if (month <=9) {
    quarter = 3; }
  else if (month <=12) {
    quarter = 4; }
  else {
    console.log('month is not valid')
  }
  
  return quarter  
}



const quarterOf = (month) => {
  return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4;
  
}
