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
You have to use the predefined map PRESET_COLORS (JavaScript, Python, Ruby), presetColors (Java, C#, Haskell), or preset-colors (Clojure). The keys are the names of preset colors in lower-case and the values are the corresponding colors in 6-digit hexadecimal (same as 1. "#RRGGBB").

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

