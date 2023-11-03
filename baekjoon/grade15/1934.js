// /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
const cases = Number(input[0]);
let answer = '';

const gcd = (a, b) => {
  let tmp;
  while (b !== 0) {
    tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
}; // 최대공약수
const lcm = (a, b) => (a * b) / gcd(a, b); // 최대공배수

for (let i = 1; i <= cases; i++) {
  const x = Number(input[i].split(' ')[0]);
  const y = Number(input[i].split(' ')[1]);
  answer += lcm(x, y) + '\n';
}

console.log(answer.trim());
