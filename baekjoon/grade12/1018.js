// /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
const [y, x] = input
  .shift()
  .split(' ')
  .map((el) => parseInt(el));
input = input.map((el) => el.trim().split(''));
let answer = [];

// console.log(number, input);
const maxX = x - 8;
const maxY = y - 8;

for (let j = 0; j <= maxY; j++) {
  // 세로
  for (let i = 0; i <= maxX; i++) {
    // 가로

    for (let k = 0; k < 8; k++) {
      // 1줄씩
      console.log(j, i, k);
      console.log(input[j][i + k]);
    }
  }
}

// if (number[0] % 2 === 0) {
//   // 짝수

// }
