const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = parseInt(fs.readFileSync('./input.txt').toString().trim());

console.log(`${'long '.repeat(input / 4 || 1)}int`);
