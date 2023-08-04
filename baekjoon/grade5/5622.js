const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('./input.txt').toString().trim().split('');
let result = 0;

const dial = [
  [''],
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
  ['J', 'K', 'L'],
  ['M', 'N', 'O'],
  ['P', 'Q', 'R', 'S'],
  ['T', 'U', 'V'],
  ['W', 'X', 'Y', 'Z'],
];

input.forEach((word) => {
  const idx = dial.findIndex((el) => el.includes(word));
  if (idx < 0) return;
  result = result + idx + 2;
});

console.log(result);
