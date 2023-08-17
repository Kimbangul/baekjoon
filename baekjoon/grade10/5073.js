///dev/stdin
const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map((num) => parseInt(num)));

input.forEach((el, idx) => {
  if (idx === input.length - 1) return;
  const sortedNum = el.sort((a, b) => b - a);

  if (sortedNum[0] >= sortedNum[1] + sortedNum[2]) {
    console.log('Invalid');
    return;
  }

  const uniqueNum = [...new Set(el)];

  if (uniqueNum.length === 1) {
    console.log('Equilateral');
    return;
  } else if (uniqueNum.length === 2) {
    console.log('Isosceles');
    return;
  } else {
    console.log('Scalene');
    return;
  }
});
