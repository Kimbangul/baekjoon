const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');
input = input.slice(1, input.length);
let result = 0;

input.forEach((el) => {
  const str = el.trim();
  const dupStr = [...new Set(str)];

  const isGroup = dupStr.every((el) => {
    const sliceStr = str.slice(str.indexOf(el), str.lastIndexOf(el) + 1);
    return [...new Set(sliceStr)].length === 1;
  });

  isGroup && result++;
});

console.log(result);
