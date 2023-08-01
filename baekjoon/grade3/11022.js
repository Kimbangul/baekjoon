const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

for (let i = 1; i <= parseInt(input[0]); i++) {
  const num = input[i].split(' ').map((el) => parseInt(el));
  console.log(`Case #${i}: ${num[0]} + ${num[1]} = ${num[0] + num[[1]]}`);
}
