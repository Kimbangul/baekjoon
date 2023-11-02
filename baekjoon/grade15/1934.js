// /dev/stdin
const fs = require('fs');
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map((el) => el.split(' ').map((str) => parseInt(str)));

console.log(input);

const gcd = (a, b) => (b ? gcd(b, a % b) : a); // 최대공약수
const lcm = (a, b) => (a * b) / gcd(a, b); // 최대공배수
console.log(lcm(input[1][0], input[1][1]));
