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
