const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
const numArr = input.map((el) => el.split(' ').map((num) => parseInt(num)));

for (let i = 0; i < input.length - 1; i++) {
  console.log(numArr[i][0] + numArr[i][1]);
}
