const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('./input.txt').toString().trim();

for (let i = parseInt(input); i >= 1; i--) {
  console.log(`${` `.repeat(i - 1)}${`*`.repeat(parseInt(input) - (i - 1))}`);
}
