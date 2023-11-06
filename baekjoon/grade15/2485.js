const path = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const fs = require('fs');
let [N, ...input] = fs.readFileSync(path).toString().trim().split('\n');

input = input.map(Number);

let dist = [];
input.reduce((prev, cur) => {
  dist.push(cur - prev);
  return cur;
});
dist.sort((a, b) => a - b);

const gcd = (a, b) => {
  if (a === 0) return b;
  let tmp;
  while (b !== 0) {
    tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
};
let answer = gcd(dist.pop(), dist.pop());

while (dist.length > 0) {
  answer = gcd(answer, dist.pop());
}

let cnt = 0;

input.reduce((acc, cur) => {
  cnt += Math.floor((cur - 1 - acc) / answer);
  return cur;
});

console.log(cnt);
