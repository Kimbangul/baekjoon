const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const result = [...input[1].trim()].reduce((prev, curr, idx) => {
  return parseInt(prev) + parseInt(curr);
});

console.log(result);
