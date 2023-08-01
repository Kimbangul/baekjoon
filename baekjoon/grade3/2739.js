const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(num) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

solution(input);
