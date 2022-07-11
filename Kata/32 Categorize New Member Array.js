// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
// They would like your help with an application form that will tell prospective members which category 
// they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
// In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. 
// Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) 
// stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data){
  // ...
  let finArr = [];
  for (let arr of data) {
    // if (arr[0] > 54 && arr[1] > 7 {
    //   finArr.push("Senior");
    // } else {
    //   finArr.push("Open");
    // }   
    // arr[0] > 54 && arr[1] > 7 ? finArr.push("Senior") : finArr.push("Open");
    finArr.push(arr[0] > 54 && arr[1] > 7 ? "Senior" : "Open");
  }
  return finArr
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])); // ['Open', 'Senior', 'Open', 'Senior']
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]])); // ['Open', 'Open', 'Open', 'Open']
