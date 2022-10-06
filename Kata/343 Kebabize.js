// Kebabize


/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters
*/

function kebabize(str) {  
  return str.replace(/[0-9]/g, '').split(/(?=[A-Z])/).join('-').toLowerCase()  
}


console.log(kebabize('myCamelCasedString')); // 'my-camel-cased-string'
console.log(kebabize('myCamelHas3Humps')); // 'my-camel-has-humps'
