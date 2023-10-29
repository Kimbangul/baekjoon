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

let result = input.sort((a, b) => parseInt(a) - parseInt(b));

result = result
  .map((el) => el.join(' ').trim())
  .join('\n')
  .trim();

console.log(result);
