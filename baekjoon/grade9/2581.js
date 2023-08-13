///dev/stdin
const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => parseInt(el));

let prime = [];

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

for (let i = input[0]; i <= input[1]; i++) {
  isPrime(i) && prime.push(i);
}

const sum = prime.reduce((prev, cur) => {
  return prev + cur;
}, 0);

if (prime.length > 0) {
  console.log(sum + '\n' + Math.min(...prime));
} else {
  console.log(-1);
}
