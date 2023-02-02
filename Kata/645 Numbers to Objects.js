// Numbers to Objects

/*
You will be given an array of numbers.

For each number in the array you will need to create an object.

The object key will be the number, as a string. The value will be the corresponding character code, as a string.

Return an array of the resulting objects.

All inputs will be arrays of numbers. All character codes are valid lower case letters. 
The input array will not be empty.You will be given an array of numbers.

For each number in the array you will need to create an object.

The object key will be the number, as a string. The value will be the corresponding character code, as a string.

Return an array of the resulting objects.

All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.
*/

function numObj(s) {
  let finArr = [];
  for (let i = 0; i < s.length; i++) {
    finArr.push({ [s[i]]: String.fromCharCode(s[i]) });
  }
  return finArr;
}


console.log(numObj([118, 117, 120])); // [{'118':'v'}, {'117':'u'}, {'120':'x'}]
console.log(numObj([101, 121, 110, 113, 113, 103]));
// [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}]
