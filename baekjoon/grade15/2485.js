const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const fs = require('fs');
const input = fs
  .readFileSync(path)
  .toString()
  .split('\n')
  .map((el) => Number(el));
input.shift();
let min = 0;

console.log(input);

input.forEach((el, idx) => {
  if (idx === input.length - 1) return;
  const diff = Math.abs(input[idx + 1] - input[idx]);
  console.log(diff);
  if (min === 0 || diff < min) {
    console.log(diff, min);
    min = diff;
  }
});

console.log(min);
