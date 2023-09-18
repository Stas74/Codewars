// Easy Balance Checking

/*
You are given a (small) check book as a - sometimes - cluttered (by non-alphanumeric characters) string:

"1000.00
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10"
The first line shows the original balance. 
Each other line (when not blank) gives information: check number, category, check amount. 
(Input form may change depending on the language).

First you have to clean the lines keeping only letters, digits, dots and spaces.

Then return a report as a string (underscores show spaces -- don't put them in your solution. 
They are there so you can see them and how many of them you need to have):

"Original_Balance:_1000.00
125_Market_125.45_Balance_874.55
126_Hardware_34.95_Balance_839.60
127_Video_7.45_Balance_832.15
128_Book_14.32_Balance_817.83
129_Gasoline_16.10_Balance_801.73
Total_expense__198.27
Average_expense__39.65"

On each line of the report you have to add the new balance and then in the last two lines the total expense 
and the average expense. So as not to have a too long result string we don't ask for a properly formatted result.

Notes

See input examples in Sample Tests.
It may happen that one (or more) line(s) is (are) blank.
Round to 2 decimals your calculated results (Elm: without traling 0)
The line separator of results may depend on the language \n or \r\n. See examples in the "Sample tests".
R language: Don't use R's base function "mean()" that could give results slightly different from expected ones.
*/

function balance(book) {
  // Please use .toFixed(2) to format numbers
  let finArr = [];
  let cleanArr = book.replace(/[^a-z\d. ]/gi, " ").split(" ").filter(el => el.trim());  
  let startBalance = +cleanArr[0];
  let expArr = cleanArr.slice(3).filter((val, i) => i % 3 == 0);
  const total = expArr.reduce((prev, cur) => prev + +cur,0).toFixed(2);
  const aver = (+total / expArr.length).toFixed(2);
  finArr.push(`Original Balance: ${startBalance.toFixed(2)}\r`)
  for (let i = 1; i < cleanArr.length; i += 3) {
    startBalance = +startBalance - expArr[Math.floor(i / 3)]
    finArr.push(cleanArr.slice(i, i + 3).map((v,i)=>v.replace(/\d+\.\d+/,v=>(v*1).toFixed(2))).join(' ') + ` Balance ${startBalance.toFixed(2)}\r`)
  }
  finArr.push(`Total expense  ${total}\r`, `Average expense  ${aver}`)
  return finArr.join("\n")
}

[
  '1000.00',  '125',
  'Market',   '125.45',
  '126',      'Hardware',
  '34.95',    '127',
  'Video',    '7.45',
  '128',      'Book',
  '14.32',    '129',
  'Gasoline', '16.10'
]

var b1 = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`;

var b1sol = `Original Balance: 1000.00\r
125 Market 125.45 Balance 874.55\r
126 Hardware 34.95 Balance 839.60\r
127 Video 7.45 Balance 832.15\r
128 Book 14.32 Balance 817.83\r
129 Gasoline 16.10 Balance 801.73\r
Total expense  198.27\r
Average expense  39.65`;

var b2=`1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tyres;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`

var b2sol = `Original Balance: 1233.00\r
125 Hardware 24.80 Balance 1208.20\r
123 Flowers 93.50 Balance 1114.70\r
127 Meat 120.90 Balance 993.80\r
120 Picture 34.00 Balance 959.80\r
124 Gasoline 11.00 Balance 948.80\r
123 Photos 71.40 Balance 877.40\r
122 Picture 93.50 Balance 783.90\r
132 Tyres 19.00 Balance 764.90\r
129 Stamps 13.60 Balance 751.30\r
129 Fruits 17.60 Balance 733.70\r
129 Market 128.00 Balance 605.70\r
121 Gasoline 13.60 Balance 592.10\r
Total expense  640.90\r
Average expense  53.41`

console.log(balance(b1)); // b1sol
console.log(balance(b2)); // b2sol




function balance(book) {

  let totalExpense = 0
  , [ originalBalance, ...entries ] = book
    .trim()
    .replace(/[^a-z0-9\s.]+/gi, '')
    .replace(/\s{2,}/g, m => m[0])
    .split(/\n/);

  originalBalance = parseFloat(originalBalance);

  entries = entries.map(row => 
    row.replace(/\S+$/g, m => {
      totalExpense += parseFloat(m);
      return parseFloat(m).toFixed(2) + ' Balance ' + (originalBalance - totalExpense).toFixed(2);
    })
  );

  entries.unshift('Original Balance: ' + originalBalance.toFixed(2));
  entries.push('Total expense  ' + totalExpense.toFixed(2));
  entries.push('Average expense  ' + (totalExpense / (entries.length - 2)).toFixed(2));
  return entries.join("\r\n");
   
}




function balance(book) {
  const round=x=>Number(x).toFixed(2);
  book=book.split("\n").filter(Boolean).map(x=>x.replace(/[^a-z0-9.]/gi," ").split(" ").filter(Boolean));
  var balance=book[0];
  var totalExpence=0;
  var result=["Original Balance: "+round(balance)];
  book.forEach((x,i)=>{
    if(i>0){
      totalExpence+=Number(book[i][2]);
      balance-=Number(book[i][2])
      result.push(book[i][0]+" "+book[i][1]+" "+round(book[i][2])+" Balance "+round(balance));
    }
  });
  result.push("Total expense  "+round(totalExpence));
  result.push("Average expense  "+round(totalExpence/(book.length-1)));
  return result.join("\r\n");
}



const balance = book => {
  book = book.replace(/[^a-z\d.\s]/gi, ``).split(`\n`).filter(Boolean);
  let original = +book.shift();
  let total = 0;
  book = book.map(val => `${val} Balance ${original - (total += +val.match(/\S+$/))}`.replace(/[\d.]+/g, (val, idx) => idx ? (+val).toFixed(2) : val));
  book.unshift(`Original Balance: ${original.toFixed(2)}`);
  book.push(`Total expense  ${total.toFixed(2)}`);
  book.push(`Average expense  ${(total / (book.length - 2)).toFixed(2)}`);
  return book.join(`\r\n`);
};



function balance(book) {
  const arr = book
  .replace(/[^a-z0-9\\.\n ]/gi,'')
  .split('\n')
  .filter(el => el != '');
  const orgBalance = arr.shift() * 1;
  let str = `Original Balance: ${orgBalance.toFixed(2)}\r\n`;
  let total = 0;
  let balance = orgBalance;
  arr.forEach(r => {
    let row = r.split(' ')
    balance -= row[2];
    str += `${row[0]} ${row[1]} ${(row[2] * 1).toFixed(2)} Balance ${balance.toFixed(2)}\r\n`;
    total += row[2] * 1;
  });
  str += `Total expense  ${total.toFixed(2)}\r\n`;
  str += `Average expense  ${(total / arr.length).toFixed(2)}`;
  return str;
}



