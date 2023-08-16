///dev/stdin
export const fs = require('fs');
const input = parseInt(fs
  .readFileSync('./input.txt')
  .toString()
  .trim());

  console.log(4 * input)