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
