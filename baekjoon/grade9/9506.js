///dev/stdin
const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => parseInt(el));

let result = '';

input.forEach((num, idx) => {
  if (idx === input.length - 1) return;
  let divisor = [];

  for (let i = 1; i < num; i++) {
    if (num % i === 0) divisor.push(i);
  }

  const sum = divisor.reduce((prev, cur) => {
    return prev + cur;
  }, 0);

  if (sum === num) {
    result += `${num} = ${divisor.join(' + ').trim()}\n`;
  } else {
    result += `${num} is NOT perfect.\n`;
  }
});

console.log(result.trim());
