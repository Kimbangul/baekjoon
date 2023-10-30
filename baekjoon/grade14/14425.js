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

for (let i = 0; i < targetArr.length; i++) {
  for (let j = 0; j < compareArr.length; j++) {
    if (targetArr[i].includes(compareArr[j])) result++;
  }
}

console.log(result);
