const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const input = fs
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.toString());

for (let i = 1; i < input.length; i++) {
  console.log(input[i][0] + input[i][input[i].trim().length - 1]);
}
