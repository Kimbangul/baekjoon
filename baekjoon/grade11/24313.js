// /dev/stdin
const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const a = input[0]
  .trim()
  .split(' ')
  .map((el) => parseInt(el))
  .reverse();
const c = parseInt(input[1]);
const n0 = parseInt(input[2]);
console.log(`${a[1]}n + ${a[0]} ≤ ${c} n`);
console.log(`${a[0] * -1} / ${a[1] - c}`);
const right = (a[0] * -1) / (a[1] - c);
console.log(right);
console.log(n0 <= right);
if (a[1] - c >= 0) {
  n0 <= right ? console.log(1) : console.log(0);
} else {
  n0 >= right ? console.log(1) : console.log(0);
}
