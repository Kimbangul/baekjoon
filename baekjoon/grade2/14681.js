const readline = require('readline');

let input = [];

function solution(x, y) {
  if (x > 0) {
    y > 0 ? console.log(1) : console.log(4);
  } else {
    y > 0 ? console.log(2) : console.log(3);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(parseInt(input[0]), parseInt(input[1]));
  process.exit();
});
