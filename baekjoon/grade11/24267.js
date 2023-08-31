// /dev/stdin
const fs = require('fs');
const input = BigInt(fs.readFileSync('./input.txt').toString().trim());

console.log(parseInt(input) - 2);

console.log(Math.pow(parseInt(input) - 2, 2) * (parseInt(input) - 1));
