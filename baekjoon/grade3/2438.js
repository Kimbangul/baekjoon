const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('./input.txt').toString().trim();

for (let i = 1; i <= parseInt(input); i++) {
  console.log(`*`.repeat(i));
}
