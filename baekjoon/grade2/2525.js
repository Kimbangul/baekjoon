const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const beforeTime = input[0].split(' ').map((el) => parseInt(el));
const cookingTime = [Math.floor(parseInt(input[1]) / 60), parseInt(input[1]) % 60];

function solution(before, after) {
  let result = [];
  if (before[1] + after[1] >= 60) {
    result[0] = before[0] + after[0] + 1;
    result[1] = before[1] + after[1] - 60;
  } else {
    result[0] = before[0] + after[0];
    result[1] = before[1] + after[1];
  }

  if (result[0] >= 24) result[0] -= 24;

  console.log(result[0] + ' ' + result[1]);
}

solution(beforeTime, cookingTime);
