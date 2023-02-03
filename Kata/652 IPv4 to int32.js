// IPv4 to int32

/*
Take the following IPv4 address: 128.32.10.1 This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001

So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.

Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number.

  ipToInt32("128.32.10.1") => 2149583361
*/

function ipToInt32(ip){
  return ip.split(".").reduce((prev, cur) => prev * 256 + +cur,0)
}

// return (Number(ip.split(".").map(num => ("00000000" + (+num).toString(2)).slice(-8)).join("")))

console.log(ipToInt32("128.32.10.1")); // 2149583361



function ipToInt32(ip){
  return parseInt(ip.split('.')
                      .map(octet => ("00000000" + (+octet)
                        .toString(2))
                        .substr(-8))
                      .join(''), 2)
}



const ipToInt32 = ip =>
  ip.split(`.`).reduce((pre, val) => 2 ** 8 * pre + +val);



function ipToInt32(ip) {
  ip = ip.split(".");
  return ((ip[0] << 24) + (ip[1] << 16) + (ip[2] << 8) + (ip[3] << 0)) >>> 0;
}



let ipToInt32 = ip => ip.split(".").reduce((a, b) => a << 8 | b) >>> 0;



function ipToInt32(ip){
  var array8 = new Uint8Array(ip.split('.').reverse().map(Number))
  var array32 = new Uint32Array(array8.buffer);
  return array32[0];
}



function ipToInt32(ip){
  let arr = ip.split('.').map(n => Number(n));
  
  arr[0] *= Math.pow(256, 3);
  arr[1] *= Math.pow(256, 2);
  arr[2] *= 256;
  arr[3];
    
  return arr[0] + arr[1] + arr[2] + arr[3];  
}


