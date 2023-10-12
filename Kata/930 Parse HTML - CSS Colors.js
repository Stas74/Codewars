// Parse HTML/CSS Colors

/*
In this kata you parse RGB colors represented by strings. 
The formats are primarily used in HTML and CSS. 
Your task is to implement a function which takes a color as a string and returns the parsed color as a map (see Examples).

Input:
The input string represents one of the following:

6-digit hexadecimal - "#RRGGBB"
e.g. "#012345", "#789abc", "#FFA077"
Each pair of digits represents a value of the channel in hexadecimal: 00 to FF

3-digit hexadecimal - "#RGB"
e.g. "#012", "#aaa", "#F5A"
Each digit represents a value 0 to F which translates to 2-digit hexadecimal: 0->00, 1->11, 2->22, and so on.

Preset color name
e.g. "red", "BLUE", "LimeGreen"
You have to use the predefined map PRESET_COLORS (JavaScript, Python, Ruby), presetColors (Java, C#, Haskell), 
or preset-colors (Clojure). 
The keys are the names of preset colors in lower-case and the values 
are the corresponding colors in 6-digit hexadecimal (same as 1. "#RRGGBB").

Examples:

parseHTMLColor('#80FFA0');    // => { r: 128, g: 255, b: 160 }
parseHTMLColor('#3B7');       // => { r: 51,  g: 187, b: 119 }
parseHTMLColor('LimeGreen');  // => { r: 50,  g: 205, b: 50  }

In this kata you parse RGB colors represented by strings. 
The formats are primarily used in HTML and CSS. 
Your task is to implement a function which takes a color as a string and returns the parsed color as a map (see Examples).

Input:

The input string represents one of the following:

6-digit hexadecimal - "#RRGGBB"
e.g. "#012345", "#789abc", "#FFA077"
Each pair of digits represents a value of the channel in hexadecimal: 00 to FF

3-digit hexadecimal - "#RGB"
e.g. "#012", "#aaa", "#F5A"
Each digit represents a value 0 to F which translates to 2-digit hexadecimal: 0->00, 1->11, 2->22, and so on.

Preset color name
e.g. "red", "BLUE", "LimeGreen"
You have to use the predefined map PRESET_COLORS (JavaScript, Python, Ruby), presetColors (Java, C#, Haskell), 
or preset-colors (Clojure). 
The keys are the names of preset colors in lower-case and the values are the corresponding colors in 6-digit hexadecimal 
(same as 1. "#RRGGBB").

Examples:

parseHTMLColor('#80FFA0');    // => { r: 128, g: 255, b: 160 }
parseHTMLColor('#3B7');       // => { r: 51,  g: 187, b: 119 }
parseHTMLColor('LimeGreen');  // => { r: 50,  g: 205, b: 50  }
*/

function colorArray(str) {
  let colorArr = ["r", "g", "b"];
  let numArr = [];
  let obj = {};
  for (let i = 1; i < str.length; i += 2) {
    numArr.push(parseInt(str.slice(i, i + 2), 16));
  }
  for (let index = 0; index < colorArr.length; index++) {
    obj[colorArr[index]] = numArr[index];
  }
  return obj;
}

function parseHTMLColor(color) {
  if (color[0] == "#" && color.length > 4) {
    return colorArray(color);
  }
  if (color[0] == "#") {
    let fullStr = "#";
    for (let i = 1; i < color.length; i++) {
      fullStr += color[i].repeat(2);
    }
    return colorArray(fullStr);
  }

  return colorArray(PRESET_COLORS[color.toLowerCase()]);
}


// const PRESET_COLORS = {
//   aliceblue: "#f0f8ff",
//   antiquewhite: "#faebd7",
//   ...
// };


console.log(parseHTMLColor("#80FFA0")); // { r: 128, g: 255, b: 160 }
console.log(parseHTMLColor("#3B7")); // { r: 51, g: 187, b: 119 }
console.log(parseHTMLColor("LimeGreen")); // { r: 50, g: 205, b: 50 }




function parseHTMLColor(color) {
  var key = color.toLowerCase();
  var rgb = (PRESET_COLORS[key] || key).slice(1);
  
  if (rgb.length === 3)
    rgb = rgb.replace(/./g, '$&$&');
    
  var val = parseInt(rgb, 16);
  
  return { 
    r: val / 65536 | 0,
    g: (val / 256 | 0) % 256,
    b: val % 256
  }
}



function parseHTMLColor(color) {
  if (color[0] === "#") {
    const [r, g, b] = color.length === 4
      ? [color[1] + color[1], color[2] + color[2], color[3] + color[3]]
      : [color.slice(1, 3), color.slice(3, 5), color.slice(5, 7)]
    return {
      r: parseInt(r, 16),
      g: parseInt(g, 16),
      b: parseInt(b, 16),
    }
  } else {
    return parseHTMLColor(PRESET_COLORS[color.toLowerCase()])
  }
}



function parseHTMLColor(c) {
  if (!c.match("#")) c = PRESET_COLORS[c.toLowerCase()];

  c = c.replace('#', '');
  
  if (c.length < 6) c = c.replace(/(.)/g, "$1$1");

  return {
    r: parseInt(c.substring(0, 2), 16),
    g: parseInt(c.substring(2, 4), 16),
    b: parseInt(c.substring(4, 6), 16)
  };
}




const parseHTMLColor = color =>
  (([r, g, b]) => ({r, g, b}))
  ((PRESET_COLORS[color.toLowerCase()] || color).slice(1).replace(/./g, (val, _, str) => str.length - 3 ? val : val + val).match(/../g).map(val => +`0x${val}`));



function parseHTMLColor(color) {
  let rgb = (PRESET_COLORS[color.toLowerCase()]||'').slice(1) || color.slice(1);
  return {r: parseInt(rgb.length==3?rgb[0]+rgb[0]:rgb.slice(0,2),16), g: parseInt(rgb.length==3?rgb[1]+rgb[1]:rgb.slice(2,4),16), b: parseInt(rgb.length==3?rgb[2]+rgb[2]:rgb.slice(4),16)};
}



function parseHTMLColor(color) {
  color = (PRESET_COLORS[color.toLowerCase()] || color).slice(1)
  
  const convert = n => parseInt(n.length === 1 ? n+n : n, 16)

  const [r, g, b] = color.length === 3 ? [...color].map(convert) : [color.slice(0, 2), color.slice(2, 4), color.slice(4)].map(convert)

  return { r, g, b }
}



const parseHTMLColor = color => {
    let result = {
        r: 0,
        g: 0,
        b: 0
    }
    if (!color.startsWith('#')) {
        color = PRESET_COLORS[color.toLocaleLowerCase()];
    }
    if (color.startsWith('#') && color.length == 4){
        color = color[0]+color[1]+color[1]+color[2]+color[2]+color[3]+color[3];     
    }
    result.r = parseInt(color.slice(1,3),16);
    result.g = parseInt(color.slice(3,5),16);
    result.b = parseInt(color.slice(5),16);
    return result
}
