// Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' 
// and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string



function fakeBin(x){
  return x.split('').map(x => x > 4? 1 : 0).join('')  
}

console.log(fakeBin('45385593107843568')) // '01011110001100111'




function fakeBin(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}


function fakeBin(x){
  return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1" )
}


function fakeBin(x){
  return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1')
}
