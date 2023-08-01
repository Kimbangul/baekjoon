const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

let result = '';

for (let i = 0; i < parseInt(input[0]); i++) {
  const num = input[i + 1].split(' ').map((el) => parseInt(el));
  result += `${num[0] + num[1]}\n`;
}
console.log(result);
