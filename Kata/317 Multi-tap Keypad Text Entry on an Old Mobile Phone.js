// Multi-tap Keypad Text Entry on an Old Mobile Phone

/*
Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages 
on candybar-shaped feature phones with 3x4 numeric keypads.

------- ------- -------
|     | | ABC | | DEF |
|  1  | |  2  | |  3  |
------- ------- -------
------- ------- -------
| GHI | | JKL | | MNO |
|  4  | |  5  | |  6  |
------- ------- -------
------- ------- -------
|PQRS | | TUV | | WXYZ|
|  7  | |  8  | |  9  |
------- ------- -------
------- ------- -------
|     | |space| |     |
|  *  | |  0  | |  #  |
------- ------- -------
Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" 
and involved pressing a button repeatedly to cycle through the possible values.

For example, to type a letter "R" you would press the 7 key three times 
(as the screen display for the current character cycles through P->Q->R->S->7). 
A character is "locked in" once the user presses a different key or pauses for a short period of time 
(thus, no extra button presses are required beyond what is needed for each letter individually). 
The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. 
No wonder they abbreviated.

For this assignment, write a module that can calculate the amount of button presses required for any phrase. 
Punctuation can be ignored for this exercise. 
Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters 
(but you should allow your module to accept input in either for convenience).

Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, 
try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, 
  and you want to be able to test new ones rapidly.)
*/


function presses(phrase) {
  let total = 0;
  console.log(phrase)
  for (let char of phrase.toUpperCase()) {
    if (["A", "D", "G", "J", "M", "P", "T", "W", " ", "1"].includes(char)) {
      total += 1;
    } else if (["B", "E", "H", "K", "N", "Q", "U", "X", "0"].includes(char)) {
      total += 2;
    } else if (["C", "F", "I", "L", "O", "R", "V", "Y"].includes(char)) {
      total += 3;
    } else {
      total += 4;
    }
  }
  return total;
}


console.log(presses("LOL"))  // 9
console.log(presses("HOW R U"))  // 13




function presses(phrase) {
  var chunks = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'],
      phrase = phrase.toUpperCase().split(''),
      total = 0;
  
  phrase.forEach(function(l) {
    var key = chunks.filter(function(c) {
      return c.indexOf(l) > -1;
    })[0];
    total += key.indexOf(l) + 1;
  });
  
  return total;      
}



function presses(phrase) {
  var sumpress = 0;
  for (var i = 0; i < phrase.length; i++)
  {
    switch (true)
    {
      case (/[1adgjmptw\s]/i.test(phrase[i])):
        sumpress++;
        break;
      case (/[behknqux0]/i.test(phrase[i])):
        sumpress += 2;
        break;
      case (/[cfilorvy]/i.test(phrase[i])):
        sumpress += 3;
        break;
      case (/[sz234568]/i.test(phrase[i])):
        sumpress += 4;
        break;
      case (/[79]/.test(phrase[i])):
        sumpress += 5;
        break;
      default:
        sumpress++;
        break;
    }
  }
  return sumpress;
}




var buttons = {
    
  1: ['1'],
  2: ['A','B','C','2'],
  3: ['D','E','F','3'],
  4: ['G','H','I','4'],
  5: ['J','K','L','5'],
  6: ['M','N','O','6'],
  7: ['P','Q','R','S','7'],
  8: ['T','U','V','8'],
  9: ['W','X','Y','Z','9'],
  0: [' ','0'],
  '*':['*'],
  '#':['#']
    
};
function presses(phrase) { 
  return phrase
    .toUpperCase()
    .split('')
    .map( 
      (elm) => Object
                .keys(buttons)
                .map( 
                  (current) => buttons[current].indexOf(elm) + 1
                )
      
    )
    .reduce( 
      (sum,current) => sum + current.reduce( (count,val) => count+val ,0) 
    ,0);
      
}
