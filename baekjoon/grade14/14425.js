// /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
let result = 0;

const arrNum = input
  .shift()
  .split(' ')
  .map((el) => parseInt(el));

const compareArr = input.slice(0, arrNum[0]);
const targetArr = input.slice(arrNum[0]);
let targetObj = {};

compareArr.forEach((el) => (targetObj[el.trim()] = true));
targetArr.forEach((el) => {
  if (targetObj[el.trim()]) result++;
});

console.log(result);
