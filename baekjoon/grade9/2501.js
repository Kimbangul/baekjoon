///dev/stdin
const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((el) => parseInt(el));
let divisor = [];

for (let i = 1; i <= input[0]; i++) {
  if (input[0] % i === 0) divisor.push(i);
}

console.log(divisor[input[1] - 1] || 0);
