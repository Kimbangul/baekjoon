const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim().split(''));

const max = Math.max(...input.map((el) => el.length));
let str = '';

for (let i = 0; i < max; i++) {
  input.forEach((row) => {
    if (!row[i]) return;
    str += row[i];
  });
}

console.log(str);
