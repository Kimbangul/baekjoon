const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map((num) => parseInt(num)));

let basket = [...Array(input[0][0]).keys()].map((x) => x + 1);

for (let i = 1; i < input.length; i++) {
  const target = input[i];
  let tmp = basket[target[0] - 1];

  basket[target[0] - 1] = basket[target[1] - 1];
  basket[target[1] - 1] = tmp;
}
console.log(basket.join(' ').trim());
