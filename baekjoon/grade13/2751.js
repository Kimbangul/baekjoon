// /dev/stdin
const fs = require('fs');
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => parseInt(el));

let result='';
const list = input.slice(1, input.length).sort((a, b) => a - b);

list.forEach((el)  => {
  result+=el+'\n'
});
console.log(result.trim());
