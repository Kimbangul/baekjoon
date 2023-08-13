const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map((num) => parseInt(num)));

let primeCount = 0;

function isPrime(num) {
  if (num <= 1) return false;
  if (num % 2 === 0) {
    return num === 2 ? true : false;
  }
  for (let i = 3; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

input[1].forEach((el) => {
  isPrime(el) && primeCount++;
});

console.log(primeCount);
