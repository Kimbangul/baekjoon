// /dev/stdin
const fs = require('fs');
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map((num) => parseInt(num)));

const cutLine = input[0][1];
// const sortedInput = input[1].sort((a, b) => b - a);

for (let i = 0; i < input[1].length - 1; i++) {
  for (let j = i + 1; j < input[1].length; j++) {
    if (input[1][j] > input[1][i]) {
      let tmp = input[1][j];
      input[1][j] = input[1][i];
      input[1][i] = tmp;
    }
  }
}

console.log(input[1][cutLine - 1]);
