// Test's results

/*
It's important day today: the class has just had a math test. You will be given a list of marks. 
Complete the function that will:

Calculate the average mark of the whole class and round it to 3 decimal places.
Make a dictionary/hash with keys "h", "a", "l" to make clear how many high, average and low marks they got. 
High marks are 9 & 10, average marks are 7 & 8, and low marks are 1 to 6.

Return list [class_average, dictionary] if there are different type of marks, 
or [class_average, dictionary, "They did well"] if there are only high marks.

Examples
[10, 9, 9, 10, 9, 10, 9] ==> [9.429, {'h': 7, 'a': 0, 'l': 0}, 'They did well']

[5, 6, 4, 8, 9, 8, 9, 10, 10, 10] ==> [7.9, {'h': 5, 'a': 2, 'l': 3}]
*/

function testResult(array) {
  const dict = { h: 0, a: 0, l: 0 };
  const avg = array.reduce((prev, cur) => prev + cur, 0) / array.length; // .toFixed(3)
  array.map((el) =>
    el <= 6 ? (dict["l"] += 1) : el <= 8 ? (dict["a"] += 1) : (dict["h"] += 1)
  );
  const finArr = [Math.round(avg * 1000) / 1000, dict];
  if (dict["h"] == array.length) {
    finArr.push("They did well");
  }
  return finArr;
}

console.log(testResult([10, 9, 9, 10, 9, 10, 9])); //  [9.429, {'h': 7, 'a': 0, 'l': 0}, 'They did well']
console.log(testResult([5, 6, 4, 8, 9, 8, 9, 10, 10, 10])); //  [7.9, {'h': 5, 'a': 2, 'l': 3}]



function testResult(array) {
   let avg = (array.reduce((a,b) => a + b) / array.length).toFixed(3)
   let h = array.filter(a => a > 8).length
   let l = array.filter(b => b < 7).length
   let a = array.filter(c => c > 6 && c < 9).length
   let result = [Number(avg), {'h': h, 'a': a, 'l': l }]
   return (l == 0 && a == 0 && h !== 0) ? result.concat(['They did well']) : result
}



function testResult(array) {

  let res = array.reduce((a, b) => {
    a[0] += b;
    a[1][b > 8 ? 'h' : b > 6 ? 'a' : 'l'] += 1;
    return a;
  }, [ 0, { h: 0, a: 0, l: 0 } ]);

  res[0] = Math.round(res[0] / array.length * 1000) / 1000;
  if (res[1].h && !res[1].a && !res[1].l)
    res.push('They did well');

  return res;
}



const testResult = array =>
  (obj => [Math.round(array.reduce((pre, val) => pre + val) / array.length * 1e3) / 1e3, obj].concat(obj.a || obj.l ? [] : `They did well`))
  (array.reduce((pre, val) => (val > 8 ? pre.h++ : val > 6 ? pre.a++ : pre.l++, pre), {h: 0, a: 0, l: 0}));



function testResult(array) {
  let sum = 0;
  let dic = {"h": 0, "a": 0, "l": 0};
  for (let s of array) {
    sum += s;
    dic[s >= 9 ? "h" : s >= 7 ? "a" : "l"]++;
  }
  return [+(sum / array.length).toFixed(3), dic].concat(dic["h"] === array.length ? ["They did well"] : []);
}



