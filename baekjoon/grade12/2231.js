// /dev/stdin
const fs = require('fs');
const input = parseInt(fs.readFileSync('./input.txt').toString());
let result = 0;

for (let i = 1; i < input; i++) {
  const num = i
    .toString()
    .split('')
    .map((el) => parseInt(el));
  const sum = num.reduce((prev, cur) => prev + cur, 0);

  if (i + sum === input) {
    result = i;
    break;
  }
}

console.log(result);
