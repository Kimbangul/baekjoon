// /dev/stdin
const fs = require('fs');
var input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim());

input.shift();
input = input.filter((el, idx) => {
  return input.indexOf(el) === idx;
});

const result = input.sort((a, b) => {
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a.charCodeAt(i) !== b.charCodeAt(i)) {
        return a.charCodeAt(i) - b.charCodeAt(i);
      }
    }
  }
  return a.length - b.length;
});

console.log(result.join('\n').trim());
