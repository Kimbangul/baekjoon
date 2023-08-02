const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => parseInt(el))
  .sort((a, b) => a - b);

const student = [...Array(30).keys()].map((x) => x + 1);
const result = student.filter((el) => !input.includes(el));

console.log(result.join('\n').trim());
