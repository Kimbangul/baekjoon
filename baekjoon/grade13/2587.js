// /dev/stdin
const fs = require('fs');
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => parseInt(el));

const midNum = Math.round(input.length / 2);
const mid = input.sort((a, b) => a - b)[midNum - 1];
const average = input.reduce((prev, cur) => prev + cur, 0) / input.length;

console.log(`${average}\n${mid}`);
