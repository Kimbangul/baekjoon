// /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
const [n, m] = input
  .shift()
  .split(' ')
  .map((el) => parseInt(el));

const noHear = input.slice(0, n).map((el) => el.trim());
let noSee = input.slice(n).reduce((prev, cur) => {
  prev[cur] = true;
  return prev;
}, {});

const filter = noHear.filter((el) => noSee[el] === true).sort();
console.log(filter.length + '\n' + filter.join('\n'));
