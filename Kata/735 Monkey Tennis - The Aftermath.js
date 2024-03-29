// Monkey Tennis - The Aftermath

/*
You are Chief Commissioning Editor at a broadcaster 
who recently approved the production of a televisual sports extravaganza, ‘Monkey Tennis’.

Broadcasting from Wimbledon has just finished and it did not go well. 
Adherence to the rules of the game was minimal and, in essence, 
you just spent 45 minutes watching a band of chimps running amuck on a tennis court in front of a live studio audience. 
Now you are left with a detritus; there are tennis balls and banana peels everywhere!

You will receive an array of tennis balls and banana peels, which will each be represented by their weight. 
Tennis balls weigh exactly 58 grams, and banana peels weigh 60 grams upwards.

Your job is to gather up just the tennis balls and return them in a sack. 
The sack will be represented by an object that has a 'weight' property, 
the value of which should be equal to the combined weight of all tennis balls in the array. 
If the array contains no tennis balls, then the weight value of the returned sack object should be 0.
*/

function ballCollector(detritus) {
  return { weight: detritus.filter((el) => el == 58).length * 58 };
}

console.log(ballCollector([58, 68, 62, 69, 58])); // { weight: 116 }
console.log(ballCollector([60, 66, 71, 68, 62])); // { weight: 0 }
console.log(ballCollector([58])); // { weight: 58 }
console.log(ballCollector([58, 58, 58])); // { weight: 174 }



function ballCollector(detritus) {
  var newArr = 0
  
  for(var i = 0; i < detritus.length; i++) {
    if(detritus[i] === 58) {
       newArr++
    }
  }
    return {weight: newArr * 58}  
}



function ballCollector(detritus) {
  var sack = 0;
  
  detritus.forEach(function(item) {
    if(item == 58) {
      sack += 58
    }
  });
  
  return { weight: sack };
}



const ballCollector = detritus =>
  ({weight: detritus.reduce((pre, val) => pre + (val === 58) * 58, 0)});



const ballCollector = arr => arr.reduce((res, c) => (c == 58 && (res.weight += c), res), {weight: 0})
