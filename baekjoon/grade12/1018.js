// /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
const [y, x] = input
  .shift()
  .split(' ')
  .map((el) => parseInt(el));
input = input.map((el) => el.trim().split(''));
let answer = [];
const maxX = x - 8;
const maxY = y - 8;

function makeBoard(xPos, yPos) {
  const line = ['WBWBWBWB', 'BWBWBWBW'];
  for (let z = 0; z < 2; z++) {
    let count = 0;

    for (let i = 0; i < 8; i++) {
      const currentLine = line[(i + z) % 2];
      for (let j = 0; j < 8; j++) {
        if (input[yPos + i][xPos + j] !== currentLine[j]) {
          count++;
        }
      }
    }
    answer.push(count);
  }
}

for (let j = 0; j <= maxY; j++) {
  // 시작점 - 세로
  for (let i = 0; i <= maxX; i++) {
    // 시작점 - 가로
    makeBoard(i, j);
  }
}

console.log(Math.min(...answer));
