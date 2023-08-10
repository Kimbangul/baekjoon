///dev/stdin
const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((el) => parseInt(el));

console.log(Math.ceil((input[2] - input[0]) / (input[0] - input[1])) + 1);
