const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const dice = input.map((el) => parseInt(el));

function solution(dice) {
  let result = '';
  let dupNum = dice.filter((el, idx) => {
    return idx !== dice.indexOf(el);
  });
  const set = new Set(dice);
  const uniqArr = [...set];

  switch (uniqArr.length) {
    case 3:
      result = Math.max(...uniqArr) * 100;
      break;
    case 2:
      result = 1000 + dupNum[0] * 100;
      break;
    case 1:
      result = 10000 + dupNum[0] * 1000;
      break;
  }

  console.log(result);
}

solution(dice);
