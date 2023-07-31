const fs = require('fs');
const input = parseInt(fs.readFileSync('./input.txt').toString().trim());

function solution(num) {
  const [conA, conB, conC] = [num % 4 === 0, num % 100 !== 0, num % 400 === 0];

  if (conA && (conB || conC)) {
    console.log(1);
  } else {
    console.log(0);
  }
}

solution(input);
