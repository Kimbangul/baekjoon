// /dev/stdin
const fs = require('fs');
var input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map((el) => parseInt(el)));

input.shift();
console.log(input);

input.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});
console.log(input.join('\n').replaceAll(',', ' ').trim());
