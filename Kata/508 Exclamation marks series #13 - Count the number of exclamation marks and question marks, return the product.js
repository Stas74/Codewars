// Exclamation marks series #13 - Count the number of exclamation marks and question marks, return the product

/*
Count the number of exclamation marks and question marks, return the product.

Examples
Product("") == 0
product("!") == 0
Product("!ab? ?") == 2
Product("!!") == 0
Product("!??") == 2
Product("!???") == 3
Product("!!!??") == 6
Product("!!!???") == 9
Product("!???!!") == 9
Product("!????!!!?") == 20
*/

function product(string) {
  return string.split("").filter(e => e == "!").length * string.split("").filter(e => e == "?").length
}

console.log(product("!!")); //  0
console.log(product("!??")); //  2
console.log(product("!!!??")); //  6



function product(s){
  excs = s.split('!').length - 1
  ques = s.split('?').length - 1
  return excs * ques
}



const product = s => (s.match(/!/g)||[]).length * (s.match(/\?/g)||[]).length ;
