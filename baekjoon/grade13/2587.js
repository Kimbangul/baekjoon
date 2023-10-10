// /dev/stdin
const fs = require('fs');
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => parseInt(el));

// -- 1
// const midNum = Math.round(input.length / 2);
// const mid = input.sort((a, b) => a - b)[midNum - 1];
// const average = input.reduce((prev, cur) => prev + cur, 0) / input.length;

// console.log(`${average}\n${mid}`);

const midNum = Math.round(input.length / 2);

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] > input[j]) {
      let tmp = input[i];
      input[i] = input[j];
      input[j] = tmp;
    }
  }
}
const mid = input[midNum - 1];
const average = input.reduce((prev, cur) => prev + cur, 0) / input.length;
console.log(`${average}\n${mid}`);
