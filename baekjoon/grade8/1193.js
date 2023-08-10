///dev/stdin
const fs = require('fs');
const input = parseInt(fs.readFileSync('./input.txt').toString());

let dir = 1;
let count = 0;
let result = {
  x: 0,
  y: 0,
};

function getFraction(dir, sum) {
  for (let i = 1; i < sum; i++) {
    let x = dir > 0 ? i : sum - i;
    let y = dir > 0 ? sum - i : i;

    count++;

    if (count >= input) {
      result.x = x;
      result.y = y;
      break;
    }
  }
}

for (let sum = 2; count < input; sum++) {
  getFraction(dir, sum);
  dir *= -1;
}

console.log(`${result.y}/${result.x}`);
