const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.trim().split(' '));

let result = 0;
let canvas = Array(100)
  .fill()
  .map(() => Array(100).fill(0));

const fillColorPaper = (xPos, yPos) => {
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      canvas[yPos + y][xPos + x] += 1;
    }
  }
};

for (let i = 1; i < input.length; i++) {
  fillColorPaper(parseInt(input[i][0]), parseInt(input[i][1]));
}

result = canvas.flat().filter((el) => el !== 0).length;
console.log(result);
