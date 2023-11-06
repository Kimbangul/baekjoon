const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const fs = require('fs');
let input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => Number(el));
input.shift();
let answer = [];

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

while (input.length != 0) {
  if (isPrime(input[0])) {
    answer.push(input[0]);
    input.shift();
  } else {
    input[0]++;
  }
}

console.log(answer);
