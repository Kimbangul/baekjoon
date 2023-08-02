const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map((num) => parseInt(num)));

let basket = Array(input[0][0]).fill(0);

for (let i = 1; i < input.length; i++) {
  for (let j = input[i][0]; j <= input[i][1]; j++) {
    basket[j - 1] = input[i][2];
  }
}

console.log(basket.join(' '));
