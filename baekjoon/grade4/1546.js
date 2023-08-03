const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map((num) => parseInt(num)));

let sum = 0;
const maxNum = Math.max(...input[1]);
const newArr = input[1].map((el) => (el / maxNum) * 100);
newArr.forEach((el) => {
  sum += el;
});

console.log(sum / input[1].length);
