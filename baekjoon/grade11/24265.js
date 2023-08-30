///dev/stdin
const fs = require('fs');
const input = parseInt(fs.readFileSync('./input.txt').toString().trim());

const n = input - 1;

console.log(`${(n * n + n) / 2}\n${2}`);
