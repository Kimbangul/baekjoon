const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {
  const length = parseInt(input[0]);

  for (let i = 0; i < length; i++) {
    const num = input[1 + i].split(' ').map((el) => parseInt(el));
    console.log(num[0] + num[1]);
  }
}

solution(input);
