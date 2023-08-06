const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = parseInt(fs.readFileSync('./input.txt').toString());
const line = 2 * input - 1;
let star = 1;
const maxStar = star + (input - 1) * 2;

for (let i = 1; i <= line; i++) {
  console.log(' '.repeat((maxStar - star) / 2) + '*'.repeat(star));

  if (i < line / 2) {
    star += 2;
  } else {
    star -= 2;
  }
}
