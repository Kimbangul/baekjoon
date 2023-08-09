const fs = require('fs');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => parseInt(el.trim()));

let answer = [];

const coin = {
  quarter: 25,
  dime: 10,
  nickel: 5,
  penny: 1,
};

for (let i = 1; i < input.length; i++) {
  let change = input[i].valueOf();

  const coinArr = Object.values(coin);

  const result = coinArr.map((el) => {
    let coinNum = parseInt(change / el);
    change = parseInt(change.valueOf() % el);
    return coinNum;
  });

  answer.push(result.join(' '));
}

console.log(answer.join('\n').trim());
