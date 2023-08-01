const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const numArr = input[1]
  .trim()
  .split(' ')
  .map((el) => parseInt(el));

console.log(`${Math.min(...numArr)} ${Math.max(...numArr)}`);
