// /dev/stdin
const fs = require('fs');
var input = fs
  .readFileSync('./input.txt')
  .toString()
  .split('')
  .map((el) => parseInt(el));

const sortedArr = input.sort((a, b) => b - a);
console.log(sortedArr.join(''));
