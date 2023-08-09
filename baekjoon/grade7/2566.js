const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map((el) =>
    el
      .trim()
      .split(' ')
      .map((str) => parseInt(str))
  );

// const max = Math.max(...input.flat()) || 0;
let max = 0;
let [x, y] = [0, 0];

input.forEach((row, rowIdx) => {
  for (let cell = 0; cell < row.length; cell++) {
    if (row[cell] < max) continue;
    max = row[cell];
    x = cell + 1;
    y = rowIdx + 1;
  }
  // if (x > 0 && y > 0) return;
  // const cellIdx = row.findIndex((cell) => cell === max);
  // if (cellIdx > -1) {
  //   x = cellIdx + 1;
  //   y = rowIdx + 1;
  // }
});

console.log(`${max}\n${y} ${x}`.trim());
