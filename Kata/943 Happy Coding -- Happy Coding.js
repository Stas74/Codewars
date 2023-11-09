// Happy Coding : Happy Coding?

/*
There are five kinds of programmers in the world:

1. The programmer was happy, so he coding.
2. When programmer coding, he is happy.
3. Programmer is coding, but he is not happy.
4. Programmer has no job of coding, he is happy.
5. no coding and no happy

Given a string nickname. It's the nickname of a programmer. Please determine which kind of programmer it belongs to. 
The result should be a number, 1,2,3,4 or 5.

You don't know the rules? Sorry, it's a puzzle ;-)

Examples

For `nickname="Happy coding", the output should be 1.

For nickname="coding happy", the output should be 2.

For nickname="coding everyday", the output should be 3.

For nickname="happy programmer", the output should be 4.

For nickname="unhappy codewarrior", the output should be 5.

Happy Coding ^_^
*/

function happyCoding(nickname) {
  let finArr = [];
  nickname
    .toLowerCase()
    .split(" ")
    .map((el) => {
      if (el == "happy" || el == "coding") finArr.push(el);
    });
  return finArr.join(" ") == "happy coding"
    ? 1
    : finArr.join(" ") == "coding happy"
    ? 2
    : finArr.join(" ") == "coding"
    ? 3
    : finArr.join(" ") == "happy"
    ? 4
    : 5;
}

// return nickname.toLowerCase().split(" ").some(el => el == "happy") &&
//   nickname.toLowerCase().split(" ").some(el => el == "coding")
//   ? 1
//   : nickname.toLowerCase().split(" ").some(el => el == "coding") &&
//   nickname.toLowerCase().split(" ").some(el => el == "happy")
//   ? 2
//   : nickname.toLowerCase().split(" ").some(el => el == "coding")
//   ? 3
//   : nickname.toLowerCase().split(" ").some(el => el == "happy")
//   ? 4
//   : 5;

console.log(happyCoding("Happy coding")); // 1
console.log(happyCoding("happy Coding")); // 1
console.log(happyCoding("coding happy")); // 2
console.log(happyCoding("coding everyday")); // 3
console.log(happyCoding("happy programmer")); // 4
console.log(happyCoding("unhappy codewarrior")); // 5
console.log(happyCoding("happyyyyy codinggggg")); // 5
console.log(happyCoding("XQXGPRlo sjyGzum Up hapPy")); // 4
console.log(happyCoding("wLKByfG coDing")); // 3
console.log(happyCoding("CodING FLCyQ gJwL haPPy")); // 2
console.log(happyCoding("dATBF hAppy UlFqtQ xXaSI codiNg teMQB")); // 1





function happyCoding(nickname){
  let codingMood = nickname.split(' ').filter(a => a.match(/happy/i) || a.match(/coding/i)).join('');
  if (codingMood.toLowerCase() === 'happycoding') return 1;
  if (codingMood.toLowerCase() === 'codinghappy') return 2;
  if (codingMood.toLowerCase() === 'coding') return 3;
  if (codingMood.toLowerCase() === 'happy') return 4;
  
  return 5;
}



function happyCoding(nickname){
  return [/[^\s\S]/,
    /\bhappy\b.*\bcoding\b/i,
    /\bcoding\b.*\bhappy\b/i,
    /\bcoding\b/i,
    /\bhappy\b/i,
    /./].findIndex(re => re.test(nickname))
}



function happyCoding(nickname){
  var s=nickname.toLowerCase().split` `,happy=s.indexOf("happy")+1,coding=s.indexOf("coding")+1
  return happy?coding?happy<coding?1:2:4:coding?3:5
}



function happyCoding(s) {
  s = s.toLowerCase().split(" ");
  let i = s.indexOf("happy");
  let j = s.indexOf("coding");
  let k = s.indexOf("programmer");
  if (i >= 0 && j > i) return 1;
  if (j >= 0 && i > j) return 2;
  if (j >= 0) return 3;
  if (i >= 0) return 4;
  return 5;
}



happyCoding=a=>/happy.*coding\b/i.test(a)?1:/coding.*happy/i.test(a)?2:/\bcoding\b/i.test(a)?3:/\bhappy\b/i.test(a)?4:5



function happyCoding(s){
  if(/\bhappy\b.*\bcoding\b/i.test(s)) return 1;
  if(/\bcoding\b.*\bhappy\b/i.test(s)) return 2;
  if(/\bcoding\b/i.test(s)) return 3;
  if(/\bhappy\b/i.test(s)) return 4;
  return 5;
}



function happyCoding(n){
  n = n.toLowerCase().split(' ')
  if(!n.includes('happy') && !n.includes('coding')) return 5
  else if(n.includes('happy') && !n.includes('coding')) return 4
  else if(n.includes('coding') && !n.includes('happy')) return 3
  else if(n.indexOf('coding') < n.indexOf('happy')) return 2
  else return 1  
}



