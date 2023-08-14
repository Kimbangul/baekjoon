///dev/stdin
export const fs = require('fs');
const input : number[] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((el : string) => parseInt(el));

const distance = [input[0], input[2] - input[0], input[1], input[3]-input[1]];

console.log(Math.min(...distance))