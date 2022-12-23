// Computer problem series #1: Fill the Hard Disk Drive

/*
Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. 
The files must be saved in the order they appear in the queue.

Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)
Output:
Number of files that can be fully saved in the HD.
Examples:
save([4,4,4,3,3], 12) -> 3
# 4+4+4 <= 12, but 4+4+4+3 > 12
save([4,4,4,3,3], 11) -> 2
# 4+4 <= 11, but 4+4+4 > 11
Do not expect any negative or invalid inputs.
*/

function save(sizes, hd) {
  for (let i = 0; i < sizes.length; i++) {
    hd -= sizes[i];
    if (hd == 0) {
      return i + 1;
    }
    if (hd < 0) {
      return i;
    }
  }
  return sizes.length;
}

console.log(save([4, 4, 4, 3, 3], 12)); // 3
console.log(save([4, 4, 4, 3, 3], 11)); // 2
console.log(save([4, 8, 15, 16, 23, 42], 108)); // 6




function save(sizes, hd) {
  let i = -1;
  while (hd >=0) {
    hd -= sizes.shift();
    i++;
  }
  return i;
}



function save(sizes, hd) {
  let result = 0;
  sizes.reduce((acc, curr) => {
    if ((acc += curr) <= hd) result += 1;
    return acc;
  }, 0);
  return result;
}



const save = ([h, ...t], hd) => h <= hd ? 1 + save(t, hd - h) : 0


