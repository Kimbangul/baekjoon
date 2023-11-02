// /dev/stdin
const fs = require('fs');
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map((el) => el.split(' ').map((str) => parseInt(str)));
input.shift();
let answer = [];

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b)); // 최대공약수
const lcm = (a, b) => (a * b) / gcd(a, b); // 최대공배수

for (let i = 0; i < input.length; i++) {
  answer.push(lcm(input[i][0], input[i][1]));
}

console.log(answer.join('\n').trim());
