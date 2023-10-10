// /dev/stdin
const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => parseInt(el));

const sortedArr = Array.from(set).sort((a, b) => a - b);
let result = '';
sortedArr.forEach((el) => {
  result = result + '\n' + el.toString();
});

console.log(result.trim());
