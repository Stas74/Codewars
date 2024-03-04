// Generate user links

/*
Generate user links
Your task is to create userlinks for the url, you will be given a username and must return a valid link.

Example
generate_link('matt c')
http://www.codewars.com/users/matt%20c

reference
use this as a reference encoding
https://www.w3schools.com/tags/ref_urlencode.asp
*/

function generateLink(user) {
  return 'http://www.codewars.com/users/' + encodeURIComponent(user);
}

console.log(generateLink('matt c')); // 'http://www.codewars.com/users/matt%20c'
console.log(generateLink('g964')); // 'http://www.codewars.com/users/g964'
console.log(generateLink('}%1(;(#m%dMv#!)4PsDFkB#(')); // ''http://www.codewars.com/users/%7D%251(%3B(%23m%25dMv%23!)4PsDFkB%23(','



function generateLink(user) {
  return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}



const generateLink = user => `http://www.codewars.com/users/${encodeURIComponent(user)}`;




function generateLink(user) {var url = 'http://www.codewars.com/users/';
  var Obj = {
    ' ':'%20',
    ';':'%3B',
    "`":'%60',
    '"':'%22',
    '/':'%2F',
    '+':'%2B',
    ',':'%2C',
    '^':'%5E',
    '|':'%7C',
    '?':'%3F',
    '#':'%23',
    '$':'%24',
    '&':'%26',
    '}':'%7D',
    ':':'%3A',
    '{':'%7B',
    ']':'%5D',
    '[':'%5B',
    '@':'%40',
    '<':'%3C',
    '>':'%3E',
  }
  user = user.replace(/%/g,'%25');
  for(var i = 0; i < user.length; i++){
    for(var key in Obj){
      if(user[i] == key){user = user.replace(user[i],Obj[key]);}
    }
  }
  return url + user;
}



