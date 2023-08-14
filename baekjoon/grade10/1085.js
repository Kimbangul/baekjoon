const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((el) => parseInt(el));

const distance = [input[0], input[2] - input[0], input[1], input[3] - input[1]];

console.log(Math.min(...distance));
