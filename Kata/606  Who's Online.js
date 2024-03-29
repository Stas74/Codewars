// Who's Online?

/*
You have a group chat application, but who is online!?

You want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in mins), 
create a function to work out who is online, offline and away.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

The input data has the following structure:

[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]
The corresponding output should look as follows:

{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
If for example, no users are online the output should look as follows:

{
  offline: ['Lucy'],
  away: ['Bob']
}
username will always be a string, status will always be either 'online' or 'offline' 
(UserStatus enum in C#) and lastActivity will always be number >= 0.

Finally, if you have no friends in your chat application, the input will be an empty array []. 
In this case you should return an empty object {} (empty Dictionary in C#).

*/

const whosOnline = (friends) => {
  let finObj = {online: [], offline: [], away: []};
  for (const el of friends) {
    if (el.status == "online") {
      el.lastActivity <= 10
        ? finObj[el.status].push(el.username)
        : finObj["away"].push(el.username);
    } else {
      finObj[el.status].push(el.username);
    }
  }
  for (const key in finObj) {
    if (finObj[key].length == 0) {
      delete finObj[key];
    }
  }
  return finObj;
};


const friends = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

console.log(whosOnline(friends));
/*
{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
*/



const whosOnline = (friends) => {
    let output = {};
    friends.forEach(e => {
        let status = e.status;
        if(status === 'online' && e.lastActivity > 10) status = 'away';
        let temp = output[status];
        if(output[status]) {
            output[status].push(e.username);
        }
        else {
            output[status] = [e.username];
        }
    });
    return output;
}




const whosOnline = friends => friends.reduce((a,{username, status, lastActivity}) => {
  const fStatus = status === 'online' && lastActivity > 10 ? 'away' : status;
  a[fStatus] ? a[fStatus].push(username) : a[fStatus] = [username];
  return a;
}, {})



const whosOnline = (friends) => {
    const output = {}
    friends.forEach((n) => {
        if (n.status === 'online' && n.lastActivity <= 10) {
            if (!output.online) output.online = [];
            output.online.push(n.username)
        } else if (n.status === 'offline') {
            if(!output.offline) output.offline = [];
            output.offline.push(n.username)
        } else {
            if(!output.away) output.away = [];
            output.away.push(n.username)
        }
    })
    return output;
}
