///dev/stdin
const fs = require('fs');
const input : number[] = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el : string) => parseInt(el));

  console.log(input);