// /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
const [n, m] = input
  .shift()
  .split(' ')
  .map((el) => parseInt(el));

console.log(n, m);

console.log(input);
const noHear = input.slice(0, n);
const noSee = input.slice(n);

console.log(noHear, noSee);
