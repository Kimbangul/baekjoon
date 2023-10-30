// /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

const arrNum = input
  .shift()
  .split(' ')
  .map((el) => parseInt(el));
console.log(arrNum);

const compareArr = input.slice(0, arrNum[0]);
const targetArr = input.slice(arrNum[0]);

console.log(compareArr, targetArr);
