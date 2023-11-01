// /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
const [n, m] = input
  .shift()
  .split(' ')
  .map((el) => parseInt(el));

const noHear = input.slice(0, n).map((el) => el.trim());
const noSee = input.slice(n).map((el) => el.trim());

const filter = noHear.filter((el) => noSee.includes(el));
console.log(filter.length + '\n' + filter.join('\n'));
