// /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
const hasCard = input[1].split(' ').map((el) => parseInt(el));
const questionCard = input[3].split(' ').map((el) => parseInt(el));
const hasCardObj = {};
let result = [];

hasCard.forEach((el) => {
  hasCardObj[el] = hasCardObj[el] ? hasCardObj[el] + 1 : 1;
});

questionCard.forEach((el) => {
  hasCardObj[el] ? result.push(hasCardObj[el]) : result.push(0);
});

console.log(result.join(' ').trim());
