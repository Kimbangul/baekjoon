// /dev/stdin
const fs = require('fs');
const input = BigInt(fs.readFileSync('./input.txt').toString().trim());

console.log(`${input * input * input}`);
console.log(3);
