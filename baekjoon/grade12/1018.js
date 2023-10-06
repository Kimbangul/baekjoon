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
  const startWord = input[yPos][xPos];
  const line = startWord === 'W' ? ['WBWBWBWB', 'BWBWBWBW'] : ['BWBWBWBW', 'WBWBWBWB'];
  let count = 0;

  for (let i = 0; i < 8; i++) {
    const currentLine = line[i % 2];
    // console.log(currentLine);

    for (let j = 0; j < 8; j++) {
      if (input[yPos + i][xPos + j] !== currentLine[j]) {
        count++;
      }
    }
  }

  answer.push(count);
}

for (let j = 0; j <= maxY; j++) {
  // console.log(`======${input[j][0]}=======`);
  // 시작점 - 세로
  for (let i = 0; i <= maxX; i++) {
    // 시작점 - 가로
    makeBoard(i, j);
  }
}

console.log(answer);
console.log(Math.min(...answer));
