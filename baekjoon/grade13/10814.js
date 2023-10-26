// /dev/stdin
const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map((item) => item.trim()));

// 나이 순, 나이가 같으면 가입한 순
input.shift();
console.log(input);

const result = input.sort((a, b) => {
  if (parseInt(a) - parseInt(b) !== 0) {
    return parseInt(a) - parseInt(b);
  } else {
    return input.indexOf(a) - input.indexOf(b);
  }
});

console.log(result);
