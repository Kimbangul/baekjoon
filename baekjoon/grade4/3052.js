const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => parseInt(el));

const result = [
  ...new Set(
    input.map((el) => {
      return el % 42;
    })
  ),
];

console.log(result.length);
