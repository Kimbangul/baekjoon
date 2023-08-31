// /dev/stdin
const fs = require('fs');
const n = BigInt(fs.readFileSync('./input.txt').toString().trim());
const bigIntResult = ((n - BigInt(2)) * (n - BigInt(1)) * n) / BigInt(6);

console.log(`${bigIntResult}`);
console.log(3);
