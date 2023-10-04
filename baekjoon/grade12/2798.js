// /dev/stdin
const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const maxNum = input[0].split(' ')[1];
const cardArr = input[1].split(' ').map((el) => parseInt(el));
let result = 0;

for (let i = 0; i < cardArr.length; i++) {
  for (let j = i + 1; j < cardArr.length; j++) {
    for (let k = j + 1; k < cardArr.length; k++) {
      const sum = cardArr[i] + cardArr[j] + cardArr[k];
      if (sum <= maxNum && result < sum) result = sum;
    }
  }
}

console.log(result);
