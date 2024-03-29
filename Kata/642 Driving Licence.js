// Driving Licence

/*
The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information
Rules
1–5: The first five characters of the surname (padded with 9s if less than 5 characters)

6: The decade digit from the year of birth (e.g. for 1987 it would be 8)

7–8: The month of birth (7th character incremented by 5 if driver is female i.e. 51–62 instead of 01–12)

9–10: The date within the month of birth

11: The year digit from the year of birth (e.g. for 1987 it would be 7)

12–13: The first two initials of the first name and middle name, padded with a 9 if no middle name

14: Arbitrary digit – usually 9, but decremented to differentiate drivers with the first 13 characters in common. We will always use 9

15–16: Two computer check digits. We will always use "AA"
Your task is to code a UK driving license number using an Array of data. The Array will look like

data = ["John","James","Smith","01-Jan-2000","M"];
Where the elements are as follows

0 = Forename
1 = Middle Name (if any)
2 = Surname
3 = Date of Birth (In the format Day Month Year, this could include the full Month name or just shorthand ie September or Sep)
4 = M-Male or F-Female
You will need to output the full 16 digit driving license number.
*/
const month = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

function driver(data) {
  let finStr = "";
  finStr += (data[2] + "99999").slice(0, 5); // 1 - 5
  finStr += data[3].slice(-2, -1); // 6
  let monthNum = month[data[3].split("-")[1].slice(0,3)]; 
  finStr += data[4] == "F" ? String(+monthNum.slice(0,1) + 5) + monthNum.slice(1): monthNum; // 7 - 8
  finStr += data[3].split("-")[0]; // 9 - 10
  finStr += data[3].slice(-1); // 11
  finStr += data[0].slice(0,1) // 12
  finStr += (data[1] + "9").slice(0,1) // 13
  return finStr.toUpperCase() + "9AA"; // 14 - 16
}

console.log(driver(["John", "James", "Smith", "01-Jan-2000", "M"])); // "SMITH001010JJ9AA"
console.log(driver(["Johanna", "", "Gibbs", "13-Dec-1981", "F"])); // "GIBBS862131J99AA"
console.log(driver(["Andrew", "Robert", "Lee", "02-September-1981", "M"])); // "LEE99809021AR9AA"




function driver(data) {
  var name = (data[2].slice(0,5).toUpperCase() +'99999').slice(0,5);    // 5
  var dob = new Date(data[3]);
  var dec = (dob.getYear().toString().length==2 ? dob.getYear().toString()[0] : dob.getYear().toString()[1]);  // 1
  var month = (data[4] == "M" ? ("0" + (dob.getMonth()+1).toString()).slice(-2) : dob.getMonth()+51);
  var day = ("0" + dob.getDate().toString()).slice(-2);
  var yearDig = dob.getYear().toString().slice(-1);
  var inits = data[0][0] + (data[1]=="" ? "9" : data[1][0])
  var arb1 = "9"
  var arb2 = "AA"
  return name + dec + month + day + yearDig + inits + arb1 + arb2
}



function driver(data) {
  var birthDay = new Date(data[3]);
  
  return (data[2].toUpperCase()+"99999").slice(0,5)                              //1-5
          +  data[3].slice(-2,-1)                                                //6
          +  ("0"+(birthDay.getMonth() + (data[4] == "M" ? 1 : 51))).slice(-2)   //7-8
          +  ("0"+birthDay.getDate()).slice(-2)                                  //9-10
          +  data[3].slice(-1)                                                   //11
          +  data[0].slice(0,1)+(data[1]+"9").slice(0,1)                         //12-13
          +  "9AA";                                                              //14-16
}



const driver = data =>
  data[2].slice(0, 5).toUpperCase().padEnd(5, 9) +
  data[3].slice(-2,-1) +
  `${new Date(data[3]).getMonth() + (data[4] === `F` ? 51 : 1)}`.padStart(2, 0) +
  `${new Date(data[3]).getDate()}`.padStart(2, 0) +
  data[3].slice(-1) +
  data[0][0] + (data[1][0] || 9) +
  `9AA`;



function driver([ forename, middle_name, surname, str_birth_date, sex ]) {

  let birth_date = new Date(str_birth_date).toJSON();

  return `${surname}99999`.slice(0, 5).toUpperCase()
       + birth_date.replace(/^..(.)(.).(.)(.).(..).*$/, (_, y3, y4, m1, m2, dd) =>
           y3 + (+m1 + (sex === 'M' ? 0 : 5)) + m2 + dd + y4)
       + forename[0] + (middle_name ? middle_name[0] : '9')
       + `9AA`;

}
