///dev/stdin
const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ')
  .map((el) => parseInt(el));

const sortedSide = input.sort((a, b) => b - a);

const otherSideLength = sortedSide[1] + sortedSide[2];

if (otherSideLength > input[0]) {
  console.log(input[0] + input[1] + input[2]);
} else {
  console.log(otherSideLength + otherSideLength - 1);
}
