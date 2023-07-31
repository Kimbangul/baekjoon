const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const time = input.map((el) => parseInt(el.trim()));

function solution(hh, mm) {
  let result = [];

  if (mm - 45 < 0) {
    result[0] = hh - 1;
    result[1] = mm + 60 - 45;
  } else {
    result[0] = hh;
    result[1] = mm - 45;
  }

  if (result[0] < 0) {
    result[0] = 24 + result[0];
  }

  console.log(result[0] + ' ' + result[1]);
}

solution(time[0], time[1]);
