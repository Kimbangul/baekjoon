const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const baseNum = input[0].split(' ')[1];

const numArr = input[1].split(' ').filter((el) => parseInt(el) < parseInt(baseNum));
console.log(numArr.join(' '));
