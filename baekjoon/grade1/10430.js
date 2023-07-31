const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let [a, b, c] = input.map((el) => parseInt(el));

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
