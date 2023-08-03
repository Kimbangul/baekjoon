const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((el) => [...el].reverse().join(''));

console.log(Math.max(...input.map((el) => parseInt(el))));
