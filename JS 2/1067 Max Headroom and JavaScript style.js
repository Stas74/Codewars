// Max Headroom and JavaScript style

/*
Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? 
Can you learn something about JavaScript style in this kata?

function getMax1()
{
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{
  return
  {
    name: 'Max Headroom'
  }
}
  
*/

function getMax1() {
  var max = {
    name: "Max Headroom",
  };
  return max;
}

function getMax2() {
  return {
    name: "Max Headroom",
  };
}

console.log(getMax1()); // { name: 'Max Headroom' }
console.log(getMax2()); // { name: 'Max Headroom' }



function getMax1()
{
  var max = {name: 'Max Headroom'}
  return max;
}

function getMax2()
{
// Have your return object on same line
return {name: 'Max Headroom'};
}



function getMax1()
{
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{
  // note Javascript does not require the semicolon but can assume it meaning nothing is returned
  // instead move the brace up
  return  {
    name: 'Max Headroom'
  }
}



const getMax1 = () => {
  const max = {name: `Max Headroom`};
  return max;
};

const getMax2 = () =>
  ({name: `Max Headroom`});
