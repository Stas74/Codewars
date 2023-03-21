// Slaphead

/*
Being a bald man myself, I know the feeling of needing to keep it clean shaven. 
Nothing worse that a stray hair waving in the wind.

You will be given a string(x). 
Clean shaved head is shown as "-" and stray hairs are shown as "/". 
Your task is to check the head for stray hairs and get rid of them.

You should return the original string, but with any stray hairs removed. 
Keep count ot them though, as there is a second element you need to return:

0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"

So for this head: "------/------" you shoud return:

["-------------", "Unicorn"]
*/

function hair(qua) {
  return qua == 0
    ? "Clean!"
    : qua == 1
    ? "Unicorn!"
    : qua == 2
    ? "Homer!"
    : qua <= 5
    ? "Careless!"
    : "Hobo!";
}

function bald(x) {
  return [x.replace(/[/]/g, "-"), hair(x.split("/").length - 1)];
}

console.log(bald("/---------")); //  ['----------', 'Unicorn!']
console.log(bald("/-----/-")); //  ['--------', 'Homer!']
console.log(bald("--/--/---/-/---")); //  ['---------------', ''Careless!']




function bald(x) {
  const count = x.split('/').length - 1;
  let look;
  switch (count) {
    case 0: look = 'Clean'; break;
    case 1: look = 'Unicorn'; break;
    case 2: look = 'Homer'; break;
    case 3:
    case 4:
    case 5: look = 'Careless'; break;
    default: look = 'Hobo';
  }
  return [x.replace(/\//g, '-'), look + '!'];
}




const bald = function(x){
  return ['-'.repeat(x.length), 
          {0:'Clean!', 1:'Unicorn!',2:'Homer!', 3:'Careless!', 
           4:'Careless!', 5:'Careless!'}[x.replace(/-/g, '').length] || 'Hobo!']
}



const bald = x =>
  [`-`.repeat(x.length), `${[`Clean`, `Unicorn`, `Homer`, `Careless`, `Careless`, `Careless`][--x.split(`/`).length] || `Hobo`}!`];



const bald = (x, hair = x.replace(/-/g, '').length ) =>
              [ x.replace(/\//g, '-'), 
               hair < 1 ? "Clean!": 
               hair < 2 ? "Unicorn!" : 
               hair < 3 ? "Homer!" : 
               hair < 6 ? "Careless!" : "Hobo!" ]




const bald=x=>[(y=x.split("/")).join("-"),["Clean!","Unicorn!","Homer!","Careless!","Careless!","Careless!"][y.length-1]||"Hobo!"]

