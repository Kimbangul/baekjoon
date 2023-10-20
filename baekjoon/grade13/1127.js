// /dev/stdin
const fs = require('fs');
var input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('')
  .map((el) => parseInt(el));

const sortedArr = input.sort((a, b) => b - a);
console.log(sortedArr.join('').trim());
