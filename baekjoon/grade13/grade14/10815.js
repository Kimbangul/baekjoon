// /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

const cardArr = input[1].split(' ').map((el) => parseInt(el));
const targetArr = input[3].split(' ').map((el) => parseInt(el));

let obj = {};
let result = '';
cardArr.forEach((el) => (obj[el] = 1));

targetArr.forEach((el) => {
  result += obj[el] ? obj[el] + ' ' : 0 + ' ';
});

console.log(result);
