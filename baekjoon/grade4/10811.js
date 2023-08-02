const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map((num) => parseInt(num)));

let basket = [...Array(input[0][0]).keys()].map((el) => el + 1);

for (let i = 1; i <= input[0][1]; i++) {
  const newArr = basket.slice(input[i][0] - 1, input[i][1]).reverse();
  basket.splice(input[i][0] - 1, input[i][1] + 1 - input[i][0], ...newArr);
}

console.log(basket.join(' '));
