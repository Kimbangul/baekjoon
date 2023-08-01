const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const numArr = input[1].split(' ').filter((el) => parseInt(el) === parseInt(input[2]));
console.log(numArr.length);
