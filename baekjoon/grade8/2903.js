///dev/stdin
const fs = require('fs');
const input = parseInt(fs.readFileSync('./input.txt').toString());

let count = 2;

for (let i = 1; i <= input; i++) {
  count = count * 2 - 1;
}

console.log(count * count);
