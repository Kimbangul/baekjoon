const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const fs = require('fs');
const input = fs
  .readFileSync(path)
  .toString()
  .split('\n')
  .map((el) => Number(el));
input.shift();

const gcd = (a, b) => {
  let tmp;
  while (b !== 0) {
    tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
};
let answer = input[0];

input.forEach((el, idx) => {
  answer = gcd(answer, el);
});

console.log(answer);

const distance = Math.max(...input) - Math.min(...input);
console.log(distance / answer - (input.length - 1));
