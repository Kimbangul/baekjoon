// /dev/stdin
const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .split(' ')
  .map((el) => parseInt(el));
const [a, b, c, d, e, f] = [input[0], input[1], input[2], input[3], input[4], input[5]];

let x = (b * f - c * e) / (b * d - a * e);
let y = (c - a * x) / b; // y = (f - d * x)/e

console.log(x, y);
