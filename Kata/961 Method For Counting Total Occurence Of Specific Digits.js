// Method For Counting Total Occurence Of Specific Digits

/*
We need a method in the List Class that may count specific digits from a given list of integers. 
This marked digits will be given in a second list. 
The method .count_spec_digits()/.countSpecDigits() will accept two arguments, 
a list of an uncertain amount of integers integers_lists/integersLists (and of an uncertain amount of digits, too) 
and a second list, digits_list/digitsList that has the specific digits to count which length cannot be be longer 
than 10 (It's obvious, we've got ten digits). 
The method will output a list of tuples, each tuple having two elements, 
the first one will be a digit to count, and second one, its corresponding total frequency in all the integers 
of the first list. 
This list of tuples should be ordered with the same order that the digits have in digitsList

Let's see some cases:

l = List()

integersList =  [1, 1, 2 ,3 ,1 ,2 ,3 ,4]
digitsList = [1, 3]
l.count_spec_digits(integersList, digitsList) == [(1, 3), (3, 2)]

integersList = [-18, -31, 81, -19, 111, -888]
digitsList = [1, 8, 4]
l.count_spec_digits(integersList, digitsList) == [(1, 7), (8, 5), (4, 0)]

integersList = [-77, -65, 56, -79, 6666, 222]
digitsList = [1, 8, 4]
l.count_spec_digits(integersList, digitsList) == [(1, 0), (8, 0), (4, 0)]

Enjoy it!!
*/

class List {
  constructor() {
    this.countSpecDigits = function (integersList, digitsList) {
      return digitsList.map((el) => [
        el,
        integersList
          .join("")
          .split("")
          .filter((n) => n == el).length,
      ]);
    };
  }
}

// let finArr = [];
// digitsList.map((el) =>
//   finArr.push([
//     el,
//     integersList
//       .join("")
//       .split("")
//       .filter((n) => n == el).length,
//   ])
// );
// return finArr;

var l = new List();

integersList = [1, 1, 2, 3, 1, 2, 3, 4];
digitsList = [1, 3];

console.log(l.countSpecDigits(integersList, digitsList)); // [[1, 3], [3, 2]]




function List() {
  this.countSpecDigits = function (integersList, digitsList) {
    var result = [];
    for (var i = 0; i < digitsList.length; i++) {
      result.push([
        digitsList[i],
        integersList.join().split(digitsList[i]).length - 1,
      ]);
    }
    return result;
  };
}



class List {
  countSpecDigits (integersList, digitsList) {
    return digitsList.map(val => [val, `${integersList}`.split(val).length - 1]);
  }
}



class List { countSpecDigits(array, digits) { return digits.map(digit => [digit, array.join``.split(digit).length - 1]); } }



function List(){
  this.countSpecDigits=function(integersList, digitsList){
    //your code here
    return digitsList.map(el => [el, (integersList.join("")).split(el).length -1]);
  }
}



class List {
  countSpecDigits (i, d) {
    d = d.map(e => [e, 0]);
    return i.reduce((r, e) => r.concat(Math.abs(e).toString().split``), [])
            .reduce((r, e) => d.map(d => d[0] == e ? [d[0], ++d[1]] : d) , d);
  }
}



function List() {
  this.countSpecDigits = (intList, digitList) => digitList.map(digit => [digit, intList.join('').split(digit).length - 1]);
}



function List() {
  this.countSpecDigits = function (integersList, digitsList) {
    let digs = [...integersList.join('')];
    let result = [];
    digitsList.forEach(digit => {
      let x = digs.reduce((acc, el) => {
        return (+el == digit) ? acc += 1 : acc;
      }, 0);
      result.push([digit, x]);
    });

    return result;
  };
}



function List(){}
List.prototype.countSpecDigits = function(nums, digits) {
  let counts = {};
  
  nums.forEach(n => {
    n = (n<0 ? -n : n).toString(10).split('');
    n.forEach(digit => {
      counts[digit] = (counts[digit] || 0) + 1;
    });
  });
  
  return digits.map(e => [e, (counts[e] || 0)]) 
};




