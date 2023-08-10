///dev/stdin
const fs = require('fs');
const input = parseInt(fs.readFileSync('./input.txt').toString());

let count = 1;
let maxNum = 1;

while (maxNum < input) {
  maxNum = maxNum + count * 6;
  count++;
}

console.log(count);
