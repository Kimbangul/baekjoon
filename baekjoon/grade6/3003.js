const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((el) => parseInt(el));

const set = [1, 1, 2, 2, 2, 8];

console.log(
  set
    .map((el, idx) => el - input[idx])
    .join(' ')
    .trim()
);
