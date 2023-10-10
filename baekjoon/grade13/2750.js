// /dev/stdin
const fs = require('fs');
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => parseInt(el));

  -- 1
input = input.slice(1, input.length);
let result = '';
const sortedArr = input.sort((a, b) => a - b);

sortedArr.forEach((el) => {
  result = result + '\n' + el.toString();
});

console.log(result.trim());

console.log(input);
