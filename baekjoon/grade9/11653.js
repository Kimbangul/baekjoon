///dev/stdin
const fs = require('fs');
let input = parseInt(fs.readFileSync('./input.txt').toString().trim());
let prime = [];

function isPrime(num) {
  for (let i = 2; i <= input; i++) {
    if (num % i === 0) {
      prime.push(i);
      input = input / i;
      return;
    }
  }
}

while (input > 1) {
  isPrime(input);
}

console.log(prime.join('\n').trim());
