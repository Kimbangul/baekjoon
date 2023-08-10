const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map((el) =>
    el
      .trim()
      .split(' ')
      .map((str) => parseInt(str))
  );

let maxNum = 0;
let maxIdx = '1 1';

input.forEach((row, rowIdx) => {
  row.forEach((cell, cellIdx) => {
    if (cell > maxNum) {
      maxNum = cell;
      maxIdx = `${rowIdx + 1} ${cellIdx + 1}`;
    }
  });
});

console.log(maxNum);
console.log(maxIdx);
