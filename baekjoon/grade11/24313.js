// /dev/stdin
const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const a = input[0]
  .split(' ')
  .map((el) => parseInt(el))
  .reverse();
const c = parseInt(input[1]);
const n0 = parseInt(input[2]);

const fn = a[1] * n0 + a[0];

fn <= c * n0 ? console.log('1') : console.log('0');
