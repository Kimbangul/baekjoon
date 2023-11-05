const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const fs = require('fs');
let [a, b, c, d] = fs
  .readFileSync(path)
  .toString()
  .split('\n')
  .map((el) => el.split(' '))
  .flat()
  .map((el) => parseInt(el));

const numerator = a * d + c * b;
const denominator = b * d;

const gcd = (a, b) => {
  let tmp;
  while (b !== 0) {
    tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
};

const gcdNum = gcd(numerator, denominator);
console.log(`${numerator / gcdNum} ${denominator / gcdNum}`);
