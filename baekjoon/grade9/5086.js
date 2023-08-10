///dev/stdin
const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));
let result = [];

const num = input.map((el) => el.map((num) => parseInt(num)));

num.forEach((el, idx) => {
  if (idx === num.length - 1) return;
  if (el[1] % el[0] === 0) {
    result.push('factor');
  } else if (el[0] % el[1] === 0) {
    result.push('multiple');
  } else {
    result.push('neither');
  }
});
console.log(result.join('\n').trim());
