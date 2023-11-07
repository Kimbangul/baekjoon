const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const fs = require('fs');
let input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split(' ')
  .map((el) => Number(el));

const answer = [];
const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

for (let i = input[0]; i <= input[1]; i++) {
  if (isPrime(i)) {
    answer.push(i);
  }
}

console.log(answer.join('\n'));
