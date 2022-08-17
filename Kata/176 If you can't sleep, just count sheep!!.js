// If you can't sleep, just count sheep!!

/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, 
return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers.
*/

var countSheep = function (num){
  let finalArr = []
  for (let i = 1; i <= num; i++) {
    finalArr.push(`${i} sheep...`)  
  }
  return finalArr.join('')
}



console.log(countSheep(1)) // "1 sheep..."
console.log(countSheep(3)) // "1 sheep...2 sheep...3 sheep..."
