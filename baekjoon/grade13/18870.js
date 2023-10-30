// /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
input.shift();
input = input[0].split(' ').map((el) => parseInt(el));

// xi > xj를 만족하는 서로 다른 좌표 xj의 개수
console.log(input);
let uniqueArr = new Set(input);
uniqueArr = Array.from(uniqueArr).sort((a, b) => a - b);

console.log(uniqueArr);

uniqueArr.forEach((el, idx) => {
  for (let i = 0; i < input.length; i++) {
    if (el === input[i]) {
      input[i] = idx;
    }
  }
});

console.log(input);
