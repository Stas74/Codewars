// Whose bicycle?

/*
I am the father of three wonderful sons. before the beginning of the school year, 
I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. 
it's time to keep promises and I count on you.

You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:

{
  'algebra': 6,
  'history': 8,
  'physics': 9,
  'geography': 2,
  'chemistry': 9
}
Return please :

'I need to buy a bicycle for my first son.' // the sum of the marks is the highest in the first diary.

'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.

'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
If two or three sons have the same highest marks, you need to choose the younger one. 
Use the age table which is constant and preloaded:

const ageTable = {
                  'firstSonAge': 14,
                  'secondSonAge': 9,
                  'thirdSonAge': 8
                }
*/

const ageTable = {
  firstSonAge: 14,
  secondSonAge: 9,
  thirdSonAge: 8,
};

function whoseBicycle(diary1, diary2, diary3) {
  const marksArr = [];
  const sons = ["first", "second", "third"];
  for (const arr of arguments) {
    marksArr.push(Object.values(arr).reduce((prev, cur) => prev + cur, 0));
  }
  const maxMark = Math.max(...marksArr);
  return `I need to buy a bicycle for my ${sons[marksArr.lastIndexOf(maxMark)]} son.`;
}

console.log(
  whoseBicycle(
    {
      algebra: 6,
      history: 7,
      physics: 8,
      geography: 9,
      chemistry: 10,
    },
    {
      algebra: 8,
      history: 7,
      physics: 8,
      geography: 9,
      chemistry: 10,
    },
    {
      algebra: 6,
      history: 5,
      physics: 5,
      geography: 9,
      chemistry: 10,
    }
  )
); // 'I need to buy a bicycle for my second son.'




function whoseBicycle(dairy1, dairy2, dairy3) {
  const diaries = [dairy1, dairy2, dairy3];
  const son = {
    0: 'first',
    1: 'second',
    2: 'third'
  };
  const scores = diaries.map((diary, index) => {
    const keys = Object.keys(diary);
    
    return keys.reduce((acc, cur) => acc + diary[cur], 0);
  });
  
  const maxValue = Math.max(...scores);
  
  const maxDiary = scores.lastIndexOf(maxValue);
  
  return `I need to buy a bicycle for my ${son[maxDiary]} son.`;
}



function whoseBicycle(a, b, c) {
  [a, b, c] = [a, b, c].map(x => Object.values(x).reduce((y, z) => y + z, 0));
  let n = Math.max(a, b, c);
  return `I need to buy a bicycle for my ${n === c ? "third" : n === b ? "second" : "first"} son.`;
}



function whoseBicycle(diary1, diary2, diary3) {
  const total1 = Object.values(diary1).reduce((total, currentValue) => total + currentValue);
  const total2 = Object.values(diary2).reduce((total, currentValue) => total + currentValue);
  const total3 = Object.values(diary3).reduce((total, currentValue) => total + currentValue);

  if (total1 > total2 && total1 > total3) {
    return 'I need to buy a bicycle for my first son.';
  } else if (total2 >= total1 && total2 > total3) {
    return 'I need to buy a bicycle for my second son.';
  } else if (total3 >= total1 && total3 >= total2) {
    return 'I need to buy a bicycle for my third son.';
  }
}



class Son {
  constructor(num, diary) {
    this.num = num;
    this.sum = Object.values(diary).reduce((pre, val) => pre + val);
    this.age = ageTable[`${num}SonAge`];
  }
}

const whoseBicycle = (diary1, diary2, diary3) =>
  `I need to buy a bicycle for my ${
    [
      new Son(`first`, diary1),
      new Son(`second`, diary2),
      new Son(`third`, diary3),
    ].sort((a, b) => b.sum - a.sum || a.age - b.age)[0].num
  } son.`;
