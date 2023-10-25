// /dev/stdin
const fs = require('fs');
var input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

console.log(input);
