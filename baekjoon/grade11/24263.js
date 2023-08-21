// /dev/stdin
const readline = require('readline');
let input = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(`${input[0]}\n1`);
  process.exit();
});
