const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split(' ');

const [a, b] = input.map((el) => parseInt(el));

function compare(a, b) {
  if (a === b) {
    console.log('==');
    return;
  }
  if (a < b) {
    console.log('<');
    return;
  }
  console.log('>');
}

compare(a, b);
