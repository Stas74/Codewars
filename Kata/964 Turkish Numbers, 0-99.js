// Turkish Numbers, 0-99

/*
Complete the function to convert an integer into a string of the Turkish name.

input will always be an integer 0-99;
output should always be lower case.
Background
Forming the Turkish names for the numbers 0-99 is very straightforward:

units (0-9) and tens (10, 20, 30, etc.) each have their own unique name;
all other numbers are simply [tens] + [unit], like twenty one in English.
Unlike English, Turkish does not have "teen"-suffixed numbers; 
e.g. 13 would be directly translated as "ten three" rather than "thirteen" in English.

Turkish names of units and tens are as follows:

0 = sıfır
1 = bir
2 = iki
3 = üç
4 = dört
5 = beş
6 = altı
7 = yedi
8 = sekiz
9 = dokuz

10 = on
20 = yirmi
30 = otuz
40 = kırk
50 = elli
60 = altmış
70 = yetmiş
80 = seksen
90 = doksan

Examples

 1  -->  "bir"
13  -->  "on üç"
27  -->  "yirmi yedi"
38  -->  "otuz sekiz"
77  -->  "yetmiş yedi"
94  -->  "doksan dört"
Good luck, or iyi şanslar :)
*/

const getTurkishNumber = (num) => {
  const units = [
    "sıfır",
    "bir",
    "iki",
    "üç",
    "dört",
    "beş",
    "altı",
    "yedi",
    "sekiz",
    "dokuz",
  ];
  const tens = [
    "empty",
    "on",
    "yirmi",
    "otuz",
    "kırk",
    "elli",
    "altmış",
    "yetmiş",
    "seksen",
    "doksan",
  ];

  return num < 10
    ? units[num]
    : num % 10 == 0
    ? tens[num / 10]
    : tens[Math.floor(num / 10)] + " " + units[num % 10];
};

console.log(getTurkishNumber(0)); // "sıfır"
console.log(getTurkishNumber(16)); // "on altı"
console.log(getTurkishNumber(26)); // "yirmi altı"
console.log(getTurkishNumber(70)); // "yetmiş"




const getTurkishNumber = (num) => {
    let nums = {
        0: 'sıfır',
        1: 'bir',
        2: 'iki',
        3: 'üç',
        4: 'dört',
        5: 'beş',
        6: 'altı',
        7: 'yedi',
        8: 'sekiz',
        9: 'dokuz',
        10: 'on',
        20: 'yirmi',
        30: 'otuz',
        40: 'kırk',
        50: 'elli',
        60: 'altmış',
        70: 'yetmiş',
        80: 'seksen',
        90: 'doksan',
    }

    if (num in nums) return nums[num];
    else {
        return nums[num.toString().split('')[0] + '0'] + ' ' + nums[num.toString().split('')[1]]
    }
}



const getTurkishNumber = num =>
  (obj => obj[num] || `${obj[num - num % 10]} ${obj[num % 10]}`)
  ({0 : `sıfır`, 1 : `bir`, 2 : `iki`, 3 : `üç`, 4 : `dört`, 5 : `beş`, 6 : `altı`, 7 : `yedi`, 8 : `sekiz`, 9 : `dokuz`, 10 : `on`, 20 : `yirmi`, 30 : `otuz`, 40 : `kırk`, 50 : `elli`, 60 : `altmış`, 70 : `yetmiş`, 80 : `seksen`, 90 : `doksan`});



const getTurkishNumber = (num) => {
	const first = ['sıfır','bir','iki','üç','dört','beş','altı','yedi','sekiz','dokuz']
    const second = ['on','yirmi','otuz','kırk','elli','altmış','yetmiş','seksen','doksan']
    return num < 10 ? first[num] : num % 10 ? second[Math.floor(num / 10 - 1)]+' '+ first[num%10]: second[num/10 - 1]
}



// ...
var getTurkishNumber = (num) => {
    const dic = { 0:'sıfır', 1:'bir',2:'iki',3:'üç',4:'dört',5:'beş',6:'altı',
              7:'yedi',8:'sekiz',9:'dokuz', 10:'on',20:'yirmi',30:'otuz',
             40:'kırk',50:'elli',60:'altmış',70:'yetmiş',80:'seksen',90:'doksan'}
  
  return num < 11 ? dic[num] : num < 20 ? `${dic[10]} `+dic[num-10] : num === 20 ? dic[num] : num < 30 ? `${dic[20]} ` + dic[num-20] : num === 30 ? dic[num] : num < 40 ? `${dic[30]} `+dic[num-30] : num === 40 ? dic[num] : num < 50 ? `${dic[40]} `+dic[num-40] : num === 50 ? dic[num] : num < 60 ? `${dic[50]} `+dic[num-50] : num === 60 ? dic[num] : num < 70 ? `${dic[60]} `+dic[num-60] : num === 70 ? dic[num] : num < 80 ? `${dic[70]} `+dic[num-70] : num === 80 ? dic[num] : num < 90 ? `${dic[80]} `+dic[num-80] : num === 90 ? dic[num] : `${dic[90]} `+dic[num-90];
}



const getTurkishNumber = (num) => {
  var ans=''
  var arr=['sıfır','bir','iki','üç','dört','beş','altı','yedi','sekiz','dokuz'];
  var arr2=['','on','yirmi','otuz','kırk','elli','altmış','yetmiş','seksen','doksan'];
  if (Math.floor(num/10)>0)
    ans+=arr2[Math.floor(num/10)];
  if (num%10!=0 && ans!='')
    ans+=' '+arr[num%10];
  if (num<10)
    return arr[num];
  return ans;
}



const getTurkishNumber = (num) => {
const str = `${num}`;
const turkishNames = {
    0: 'sıfır',
    1: 'bir',
    2: 'iki',
    3: 'üç',
    4: 'dört',
    5: 'beş',
    6: 'altı',
    7: 'yedi',
    8: 'sekiz',
    9: 'dokuz',
    10: 'on',
    20: 'yirmi',
    30: 'otuz',
    40: 'kırk',
    50: 'elli',
    60: 'altmış',
    70: 'yetmiş',
    80: 'seksen',
    90: 'doksan',
};
return turkishNames[num] ?? `${turkishNames[str[0] + 0]} ${turkishNames[str[1]]}`
}



const getTurkishNumber = (num) => {
	let underTen = {0 : 'sıfır', 1 : 'bir', 2 : 'iki', 3 : 'üç',
                4 : 'dört', 5 : 'beş', 6 : 'altı', 7 : 'yedi',
                8 : 'sekiz', 9 : 'dokuz'}
  
let tens = {10 : 'on', 20 : 'yirmi', 30 : 'otuz',
            40 : 'kırk', 50 : 'elli', 60 : 'altmış',
            70 : 'yetmiş', 80 : 'seksen', 90 : 'doksan'}

let firstDigit = Math.floor(num/10) * 10;

return num<10 ? underTen[num] : num % 10 == 0 ? tens[num] : tens[firstDigit] + " " + underTen[num%10];
}
