const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

function solution(recipt) {
  const total = parseInt(input[0]);
  const sort = parseInt(input[1]);
  let result = 0;

  for (let i = 0; i < sort; i++) {
    const item = input[2 + i].split(' ').map((el) => parseInt(el));
    result += item[0] * item[1];
  }

  total === result ? console.log('Yes') : console.log('No');
}

solution(input);
