const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('./input.txt').toString().trim().split(' ');

let word = {};
for (let i = 0; i <= 25; i++) {
  word[10 + i] = String.fromCharCode(65 + i);
}
let tenDigit = parseInt(input[0]);
let convertedDigit = [];

while (tenDigit >= parseInt(input[1])) {
  convertedDigit.unshift(tenDigit % parseInt(input[1]));
  tenDigit = parseInt(tenDigit / parseInt(input[1]));
}
convertedDigit.unshift(tenDigit);

for (let i = 0; i < convertedDigit.length; i++) {
  if (convertedDigit[i] < 10) continue;
  convertedDigit[i] = word[convertedDigit[i]];
}

console.log(convertedDigit.join(''));
