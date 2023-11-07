const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const fs = require('fs');
let input = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((el) => Number(el));
input.pop();

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

input.forEach((el, idx) => {
  let cnt = 0;
  for (let i = el; i <= 2 * el; i++) {
    if (isPrime(i)) {
      cnt++;
    }
  }
  console.log(cnt);
});

// console.log(input);
