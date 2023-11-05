const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const fs = require('fs');
let input = fs.readFileSync(path).toString().split(' ');

const gcd = (a, b) => {
  let tmp;
  while (b !== 0) {
    tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
};

const lcm = (a, b) => (a * b) / gcd(a, b);
console.log(lcm(Number(input[0]), Number(input[1])));
