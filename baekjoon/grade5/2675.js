const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
let result = '';
input.splice(0, 1);

const stringArr = input.map((el) => el.split(' '));

stringArr.forEach((el) => {
  const trimText = el[1].toString().trim();
  const arr = [...trimText].map((char) => char.repeat(el[0]));

  result += arr.join('') + '\n';
});

console.log(result.trim());
