///dev/stdin
const fs = require('fs');
const input = parseInt(fs.readFileSync('./input.txt').toString().trim());

console.log(`${input * input}\n2`);
