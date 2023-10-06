// /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
let number = input
  .shift()
  .split(' ')
  .map((el) => parseInt(el));
console.log(number);
input = input.map((el) => el.trim().split(''));

console.log(input);
input.w;
