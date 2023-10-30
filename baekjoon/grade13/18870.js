// /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');
input.shift();
input = input[0].split(' ').map((el) => parseInt(el));

// xi > xj를 만족하는 서로 다른 좌표 xj의 개수
const answer = [];
const obj = {};
let uniqueArr = new Set(input);
uniqueArr = Array.from(uniqueArr).sort((a, b) => a - b);
uniqueArr.forEach((el, idx) => (obj[el] = idx));

for (let i = 0; i < input.length; i++) {
  answer.push(obj[input[i]]);
}

console.log(answer.join(' ').trim());
