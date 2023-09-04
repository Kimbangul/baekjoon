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
console.log(`(${c}- ${a[1]})n >= ${a[0]} `);
// 1. -100 <= a[0] <= 100, -100 <= a[1] <= 100
// 2. -100 <= a[0] <= (c - a[1])n
// 3. 0 <= a[0] + 100 <= (c - a[1])n + 100
