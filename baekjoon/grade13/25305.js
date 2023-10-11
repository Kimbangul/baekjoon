// /dev/stdin
const fs = require('fs');
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map((num) => parseInt(num)));

const cutLine = input[0][1];
const sortedInput = input[1].sort((a, b) => b - a);

console.log(sortedInput[cutLine - 1]);
